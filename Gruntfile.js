/**
 * Created by meathill on 14-1-24.
 */

var htmlparser = require('htmlparser')
  , handlebars = require('handlebars')
  , fs = require('fs');

module.exports = function (grunt) {
  var BUILD =  './'
    , SOURCE = 'src/'
    , TEMP = 'temp/'
    , target = 'index.html'
    , JS_REG = /<script src="(js\/.+?\.js)"><\/script>/g
    , TEMPLATE_REG = /<template id="([\w\-]+)">([\S\s]+?)<\/template>/g
    , CDN_REG = /(..\/)+bower_components\/.*\/([\w\-]+)(.min)?.(js|css)/g
    , CDATA_REG = /\!\[cdata\[([\S\s]+)\]\]/gi
    , jses = []
    , feed = null
    , latest = 0;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      start: ['js/', 'css/', 'img/', 'index.html'],
      end: [TEMP]
    },
    index: {
      index: SOURCE + 'index.html'
    },
    compass: { // 将sass文件编译compass成css
      css: {
        options: {
          basePath: SOURCE,
          environment: 'production',
          outputStyle: 'compressed',
          relativeAssets: true
        },
        files: [{
          expand: true,
          cwd: 'sass/',
          src: ['*.sass'],
          dest: 'css/', // 压缩最终目录
          ext: '.css' // 更改后缀名
        }]
      }

    },
    copy: { // 复制
      svg: {
        files: [{
          expand: true,
          cwd: SOURCE + 'img/',
          src: ['*.svg'],
          dest: BUILD + 'img/'
        }]
      },
      css: {
        options: { // 过滤掉source map
          process: function (content) {
            return content.replace(/\/\*[\s\S]*\*\//g, '');
          }
        },
        files: [{
          expand:true,
          cwd: SOURCE + 'css/',
          src: ['*.css'],
          dest: 'css/'
        }]
      }
    },
    imagemin: { // 图片压缩模块
      img: {
        files: [{
          expand: true,
          cwd: SOURCE + 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: BUILD + 'img/'
        }]
      }
    },
    handlebars: {
      compile: {
        options: {
          partialsUseNamespace: true,
          namespace: 'TEMPLATE',
          compilerOptions:{
            knownHelpers: {
              'if': true,
              'each': true,
              'unless': true
            },
            knownHelpersOnly: true
          },
          processName: function (filePath) {
            console.log(filePath);
            return filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
          }
        },
        files: {
          'temp/templates.js': [TEMP + 'handlebars/*.hbs']
        }
      }
    },
    uglify: { // 压缩以及合并javascript文件  压缩代码，用于减少文件体积
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>(<%= grunt.template.today("yyyy-mm-dd") %>) */\n',
        compress: {
          global_defs: {
            'DEBUG': false
          },
          dead_code: true,
          unused: true,
          drop_console: true
        },
        report: 'gzip'
      },
      web: {
        files: [{
          src: jses,
          dest: BUILD + 'js/app.js'
        }]
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true
      },
      index: {
        files: [{
          src: TEMP + target,
          dest: BUILD + target
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.registerMultiTask('index', 'make index html', function () {
    var html = grunt.file.read(this.data)
      , map = grunt.file.readJSON('bower-cdn-map.json');

    // 取JS
    html = html.replace(JS_REG, function (match, src) {
      if (src.indexOf('define.js') !== -1) {
        return '';
      }
      jses.push(SOURCE + src);
      return /app\.js/.test(src) ? match : '';
    });
    jses.unshift('temp/templates.js'); // 预编译的模板

    // 取模板
    // 目前只有“最新博文”一处模板，所以这里把它替换成实际文字
    html = html.replace(TEMPLATE_REG, function (match, id, content) {
      content = content.replace(/\s{2,}|\n|\r/g, '');
      var template = handlebars.compile(content)
        , html = template({list: feed});
      grunt.file.write(TEMP + 'handlebars/' + id + '.hbs', content);
      return html;
    });

    // 使用CDN替换bower
    html = html.replace(CDN_REG, function (match, pre, name, min, ext) {
      if (name === 'bootstrap') { // 需要区分js和css
        return map[name].replace(/\{ext\}/g, ext);
      }
      return map[name];
    });

    // 生成版本号
    html = html.replace('{{version}}', grunt.config.get('pkg').version);
    // 记录最新博文的id
    html = html.replace('{{latest}}', latest);

    // 将过滤完的html写入TEMP
    grunt.file.write(TEMP + 'index.html', html);
  });
  grunt.registerTask('feed', 'get feed data', function () {
    var xml = grunt.file.read('feed.xml')
      , handler = new htmlparser.RssHandler(function (error, dom) {
        if (error) {
          grunt.log.error('[Feed] Parse xml error.');
        } else {
          feed = dom.items.slice(0, 6);
          latest = parseInt(feed[0].id.match(/\/\?p=(\d+)$/)[1]);
          for (var i = 0, len = feed.length; i < len; i++) {
            feed[i].description = feed[i].description ? feed[i].description.replace(CDATA_REG, '$1') : '';
          }
          grunt.log.write('[Feed] Feed data get: ' + feed.length + ' items, last id is: ' + latest + '.');
        }
      })
      , parser = new htmlparser.Parser(handler);
    parser.parseComplete(xml);
  });

  grunt.registerTask('default', [
    'clean:start',
    'feed',
    'index',
    'compass',
    'copy',
    'imagemin',
    'handlebars',
    'uglify',
    'htmlmin',
    'clean:end'
  ]);
};
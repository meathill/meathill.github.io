/**
 * Created by meathill on 14-1-24.
 */

module.exports = function (grunt) {
  var BUILD =  './'
    , TEMP = 'temp/'
    , target = 'index.html'
    , JS_REG = /<script src="(js/.+?\.js)"><\/script>/g
    , TEMPLATE_REG = /<template id="([\w\-]+)">([\S\s]+?)<\/template>/g
    , CDN_REG = /(../)+bower_components/.*/([\w\-]+)(.min)?.(js|css)/g
    , libs = []
    , jses = [];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      start: [BUILD],
      end: [TEMP]
    },
    index: {
      index: 'index.html'
    },
    copy: { // 复制
      svg: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.svg'],
          dest: BUILD + 'img/'
        }]
      }
    },
    compass: { // 将sass文件编译compass成css
      css: {
        options: {
          environment: 'production',
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'sass/',
          src: ['*.sass'],
          dest: BUILD + 'css/', // 压缩最终目录
          ext: '.css' // 更改后缀名
        }]
      }

    },
    imagemin: { // 图片压缩模块
      img: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: BUILD + 'img/'
        }]
      }
    },
    handlebars: {
      compile: {
        options: {
          partialsUseNamespace: true,
          namespace: 'TEMPLATES',
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
          'js/templates.js': [TEMP + 'handlebars/*.hbs']
        }
      }
    },
    uglify: { // 压缩以及合并javascript文件  压缩代码，用于减少文件体积
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
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
          dest: BUILD + 'css/index.js'
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
      jses.push(src);
      return /index\.js/.test(src) ? match : '';
    });

    jses.unshift('js/templates.js'); // 预编译的模板
    // 取模板
    html = html.replace(TEMPLATE_REG, function (match, id, content) {
      content = content.replace(/\s{2,}|\n|\r/g, '');
      grunt.file.write(TEMP + 'handlebars/' + id + '.hbs', content);
      return '';
    });

    // 使用CDN替换bower
    html = html.replace(CDN_REG, function (match, pre, name, min, ext) {
      if (name === 'bootstrap') { // 需要区分js和css
        return map[name].replace('{{ext}}', ext);
      }
      return map[name];
    });

    // 生成版本号
    html = html.replace('{{version}}', grunt.config.get('pkg').versiong);

    // 将过滤完的html写入TEMP
    grunt.file.write(TEMP + this.data, html);
  });

  grunt.registerTask('default', [
    'clean:start',
    'index',
    'copy',
    'compass',
    'imagemin',
    'handlebars',
    'uglify',
    'htmlmin',
    'clean:end'
  ]);
};
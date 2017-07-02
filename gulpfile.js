/**
 * Created by meathill on 2017/7/2.
 */

const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify');
const htmlMin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const repoExp = /node_modules\/([\w\-\.]+)\/(dist\/|build\/)?/g;
const CDN = require('./cdn.json');

gulp.task('image', () => {
  gulp.src('src/img/**')
    .pipe(imageMin())
    .pipe(gulp.dest('img/'));
});

gulp.task('stylus', () => {
  return gulp.src('styl/screen.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/'))
});

gulp.task('webpack', () => {
  return gulp.src('app/main.js')
    .pipe(webpackStream(require('./webpack.config.prod'), webpack))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js/'));
});

gulp.task('html', () => {
  return gulp.src('index.dev.html')
    .pipe(replace(repoExp, (match, repo) => {
      return CDN[repo];
    }))
    .pipe(replace('js/main.js', 'js/main.min.js'))
    .pipe(replace('css/screen.css', 'css/screen.min.css'))
    .pipe(htmlMin({
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['stylus', 'webpack', 'html']);
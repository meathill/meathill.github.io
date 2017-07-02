/**
 * Created by meathill on 2017/7/2.
 */

const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('image', () => {
  gulp.src('src/img/**')
    .pipe(imageMin())
    .pipe(gulp.dest('img/'));
});

gulp.task('stylus', () => {
  gulp.src('styl/screen.styl')
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
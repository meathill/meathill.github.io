/**
 * Created by meathill on 2017/7/2.
 */

const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

gulp.task('image', () => {
  gulp.src('src/img/**')
    .pipe(imageMin())
    .pipe(gulp.dest('img/'));
});
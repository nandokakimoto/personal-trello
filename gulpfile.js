const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  return gulp.src(['lib/**/*.js','public/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
  gulp.src('test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
});

var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('gulp-webpack');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('jasmine', function() {
  var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  var plugin = new JasminePlugin();
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(webpack({watch: true, output: {filename: 'spec.js'}}))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server());
});
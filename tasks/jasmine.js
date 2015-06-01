var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('gulp-webpack');

gulp.task('jasmine', function() {
  var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  var plugin = new JasminePlugin();
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
      .pipe(webpack(Object.assign({plugins: [plugin]}, require('../webpack.config'))))
      .pipe(jasmineBrowser.specRunner())
      .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});
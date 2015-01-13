//include gulp
var gulp = require('gulp');


// include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var webserver = require('gulp-webserver');


// grabs the current dir full path from filesystem
var rootPath = process.env.PWD = process.cwd();


// Concatenate & Minify JS
gulp.task('minify-js', function() {
  return gulp.src([
      'src/js/services/parent-injector.js',
      'src/js/proxies/bp-status-proxy.js',
      'src/js/features/api-tester.js',
      'src/js/features/iframe-content.js',
      'src/js/iframe-app.js'
    ])
    .pipe(concat('iframe-content.js'))
    .pipe(gulp.dest('www/static/js'))
    .pipe(rename('iframe-content.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/static/js'));
});

// Copy jQuery
gulp.task('copy-jquery', function () {
  return gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('www/static/js'));
});

// Copy AngularJS
gulp.task('copy-angular', function () {
  return gulp.src('bower_components/angular/angular.min.js')
    .pipe(gulp.dest('www/static/js'));
});

// Compile LESS
gulp.task('compile-less', function () {
  return gulp.src('src/styles/less/iframe-content.less')
    .pipe(less())
    .pipe(gulp.dest('www/static/css'));
});

// Lint
gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Serve
gulp.task('serve', ['build'], function () {
  return gulp.src(rootPath.concat('/www'))
    .pipe(webserver({
      host: 'content.iframe-test.com',
      port: 1600,
      open: true
    }));
});

// Default Task
gulp.task('default', ['build']);
gulp.task('build', ['minify-js', 'copy-jquery', 'copy-angular', 'compile-less']);
gulp.task('dev', ['serve']);
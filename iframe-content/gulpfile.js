//include gulp
var gulp = require('gulp');


// include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var webserver = require('gulp-webserver');


// grabs the current dir full path from filesystem
var rootPath = process.env.PWD = process.cwd();


// Concatenate & Minify JS
gulp.task('minify-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('iframe-content.js'))
    .pipe(gulp.dest('www/static/js'))
    .pipe(rename('iframe-content.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/static/js'));
});

// Copy  AngularJS
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

// Serve
gulp.task('serve', ['build'], function () {
  return gulp.src(rootPath.concat('/www'))
    .pipe(webserver({
      host: 'localhost',
      port: 1600,
      open: true
    }));
});

// Default Task
gulp.task('default', ['build']);
gulp.task('build', ['minify-js', 'copy-angular', 'compile-less']);
gulp.task('dev', ['serve']);
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
  return gulp.src([
      'src/js/api/bp-status/*.js',
      'src/js/features/counter-display.js',
      'src/js/container-app.js'
    ])
    .pipe(concat('iframe-container.js'))
    .pipe(gulp.dest('www/static/js'))
    .pipe(rename('iframe-container.min.js'))
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

// Copy Angular Mocks
gulp.task('copy-angular-mocks', function () {
  return gulp.src('bower_components/angular-mocks/angular-mocks.js')
    .pipe(gulp.dest('www/static/js'));
});

// Compile LESS
gulp.task('compile-less', function () {
  return gulp.src('src/styles/less/iframe-container.less')
    .pipe(less())
    .pipe(gulp.dest('www/static/css'));
});

// Serve
gulp.task('serve', ['build'], function () {
  return gulp.src(rootPath.concat('/www'))
    .pipe(webserver({
      host: 'container.iframe-test.com',
      port: 3200,
      open: true
    }));
});


// Tasks
gulp.task('default', ['build']);
gulp.task('build', ['minify-js', 'copy-jquery', 'copy-angular', 'copy-angular-mocks', 'compile-less']);
gulp.task('dev', ['serve']);
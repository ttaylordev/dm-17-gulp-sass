/*var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    del = require('del'),
    sass = require('gulp-sass'),
    karma = require('gulp-karma'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    ngAnnotate = require('browserify-ngannotate');*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


// gulp.task('clean', function (cb) {
//     del([
//         'dist'
//     ], cb);
// });

// gulp.task('build-css', ['clean'], function () {
//     return gulp.src('./styles/*')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(cachebust.resources())
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('./dist'));
// });


// gulp.task('build-js', ['clean'], function() {
//     var b = browserify({
//         entries: './js/app.js',
//         debug: true,
//         paths: ['./js/controllers', './js/services', './js/directives'],
//         transform: [ngAnnotate]
//     });

//     return b.bundle()
//         .pipe(source('bundle.js'))
//         .pipe(buffer())
//         .pipe(cachebust.resources())
//         .pipe(sourcemaps.init({loadMaps: true}))
//         .pipe(uglify())
//         .on('error', gutil.log)
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/js/'));
// });

// gulp.task('build', [ 'clean', 'build-css', 'build-js'], function() {
//     return gulp.src('index.html')
//         .pipe(cachebust.references())
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('watch', function() {
//     return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
// });


// gulp.task('webserver', ['watch','build'], function() {
//     gulp.src('.')
//         .pipe(webserver({
//             livereload: false,
//             directoryListing: true,
//             open: "http://localhost:8000/dist/index.html"
//         }));
// });

// gulp.task('dev', ['watch', 'webserver']);
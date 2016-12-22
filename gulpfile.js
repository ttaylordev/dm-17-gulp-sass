const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const print = require('gulp-print');
const babel = require('gulp-babel');

const Cachebuster = require('gulp-cachebust');
var cachebust = new Cachebuster();

gulp.task('styles', function(){
  return gulp.src(['./dev/styles/variables.scss','./dev/styles/*.scss', './dev/styles/**/*.scss'])
  .pipe(sass())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cachebust.resources())
  .pipe(concat('bundle.css'))
  .pipe(sourcemaps.write('./maps'))  
  .pipe(gulp.dest('./dist/styles/'))
})

gulp.task('scripts', [], function() {
  return gulp.src('./dev/js/**/*.js')               
  .pipe(sourcemaps.init())
  .pipe(print())                        
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(concat('bundle.js'))
  //.pipe(uglify())
  .pipe(sourcemaps.write('./')) 
  .pipe(gulp.dest('./dist/js')); 
});

gulp.task('clean', function (cb) {
  del([
    'dist'
  ], cb);
});

gulp.task('build', ['styles', 'scripts'], function() {
  return gulp.src('index.html')
  .pipe(cachebust.references())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});
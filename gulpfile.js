var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

var dgToastModuleSrc = [
  './src/_dg_toast.js',
  './src/classes/class.*.js',
  './src/includes/include.*.js',
  './src/widgets/widget.*.js'
];

var dgToastCssSrc = ['./css/*.css'];

// Task to build the cw_app.min.js file.
gulp.task('minifyJS', function(){
  return gulp.src(dgToastModuleSrc)
      .pipe(gp_concat('concat.js'))
      .pipe(gulp.dest(''))
      .pipe(gp_rename('dg_toast.min.js'))
      .pipe(gp_uglify())
      .pipe(gulp.dest(''));
});

// Task to build the dg_toast.min.css file.
gulp.task('minifyCSS', function(){
  gulp.src(dgToastCssSrc)
      .pipe(gp_concat('concat.css'))
      .pipe(gulp.dest(''))
      .pipe(gp_rename('dg_toast.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(''));
});

gulp.task('default', function () {
  watch(dgToastModuleSrc, function(event) { gulp.start('minifyJS') });
  watch(dgToastCssSrc, function(event) { gulp.start('minifyCSS') });
  gulp.start(['minifyJS', 'minifyCSS']);
});
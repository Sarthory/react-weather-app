"use strict";

// dependencies
let gulp = require('gulp');
let sass = require('gulp-sass');
let minifyCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let changed = require('gulp-changed');

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css/';

// compile SCSS
gulp.task('compile_scss', () => {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
});

// detect changes in SCSS
gulp.task('watch_scss', () => {
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

// run tasks
gulp.task('default', ['watch_scss']);
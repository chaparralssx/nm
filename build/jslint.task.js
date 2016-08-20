'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

/**
 * Lint the javascript files for errors
 */
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
'use strict';

var gulp = require('gulp'),
    config = require('./config');

/**
 * Copies all single js files to output
 */
gulp.task('jsSingle', function() {
    return gulp.src(config.src.js.single)
        .pipe(gulp.dest(config.build.output.js));
});
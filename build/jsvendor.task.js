'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    config = require('./config');

/**
 * Minifies all vendor js files
 */
gulp.task('jsVendor', function() {
return gulp.src(config.src.js.vendor)

    // concatenate into a single file
    .pipe(concat('vendor.min.js'))

    // minify
    .pipe(uglify())

    // output        
    .pipe(gulp.dest(config.build.output.js));

});
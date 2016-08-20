'use strict';

var gulp = require('gulp'),
    config = require('./config');

/**
 * Copies all images to the output folder and maintains the relative paths
 */
gulp.task('images', function() {
    // base: sets the relative pathing
    return gulp.src(config.src.img, { base: './src/assets' })
        .pipe(gulp.dest(config.build.output.images));
});

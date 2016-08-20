'use strict';

var gulp = require('gulp'),
    path = require('path'),
    rename = require('gulp-rename'),
    config = require('./config');

/**
 * Copies all server-side html content to the output folder
 */
gulp.task('content', function () {
    return gulp.src(config.src.content)
        .pipe(rename(function (file) {
            // Remove the "server" segment from the dir path to flatten it out
            file.dirname = file.dirname.replace(path.sep + 'server', '');
        }))
        .pipe(gulp.dest(config.build.output.content));
});

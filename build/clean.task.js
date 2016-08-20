'use strict';

var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

/**
 * Empties the output (public) folder in prep for the gulp build process
 */
gulp.task('clean', function (done) {
    del(config.build.output.content, done);
});
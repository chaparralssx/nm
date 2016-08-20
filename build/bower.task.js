var gulp = require('gulp'),
    bower = require('gulp-bower');

/**
 * Download all required bower files
 */
gulp.task('bower', function(){
    return bower();
});
'use strict';

var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    config = require('./config');

/**
 * Compiles the client side html templates into angular cache
 */
gulp.task('templates', function() {
    return gulp.src(config.src.templates)

        // Compile into angular cache using the configured module name
        .pipe(templateCache({
            module: config.src.templateModuleName,
            standalone: true // standalone creates the angular module as well
        }))

        // Output
        .pipe(gulp.dest(config.build.output.js));

});

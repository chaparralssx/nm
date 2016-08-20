'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    config = require('./build/config'),
    nodemon = require('gulp-nodemon'),
    install = require("gulp-install");

// Import all build tasks
// Reference: https://www.npmjs.com/package/require-all
require('require-all')({
    dirname: __dirname + '/build',
    filter: /(.+\.task)\.js$/
});

gulp.task('default', ['build']); // When gulp is run without parameters, do these 'default' tasks

gulp.task('build', function(done){
    // Reference: https://www.npmjs.com/package/run-sequence
    // This will run in this order: 
    // * build-clean 
    // * jsApp, jsSingle, jsVendor, styles, templates, images, and content in parallel 
    // * Finally call the 'done' function 
    runSequence (
        'clean',
        ['jsApp', 'jsSingle', 'jsVendor', 'styles', 'templates', 'images', 'content'],
        done
    )
});

/**
 * Get and install missing bower and npm packages
 */
gulp.task('packages', function() {
    gulp.src(['./bower.json', './package.json']).pipe(install());
});

/**
 * Start the development server and restart automatically when changes are made
 */
gulp.task('run', function() {
    nodemon({
        script: 'index.js',
        ext: 'js',
        ignore: ['public/*'], // Ignore files that are changed by the build
        env: { NODE_ENV: 'development', DEBUG: true }
    });
});

// Development server tasks: load files, build, start the server and watch for changes
gulp.task('serve', function (done) {
    runSequence('packages','bower', 'build', 'watch', 'run', done);
});

/**
 * Watch the given file paths, and if changes detected, re-run the specified gulp tasks 
 */
gulp.task('watch', function() {
    gulp.watch('src/**/*.less', ['styles']);
    gulp.watch('src/**/*.js', ['lint']);
    gulp.watch(config.src.js.app, ['jsApp']);
    gulp.watch('src/**/*.html', ['templates', 'content']);
});
'use strict';

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    wrap = require('gulp-wrap'),
    ngannotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    config = require('./config'),
    dev_env = (process.env.NODE_ENV || 'development') === 'development';

gulp.task('jsApp', ['lint'], jsApp);

/**
 * Compiles the application js files
 */
function jsApp() {
    // grab the source files
    var js = gulp.src(config.src.js.app);

    if (dev_env) {
        // init the sourcemaps builder
        js = js.pipe(sourcemaps.init());
    }
    
    // annotate angular dependencies (so minification doesnt break)
    js = js.pipe(ngannotate())
        
        // wrap all files in an IIFE
        .pipe(wrap('(function(angular){\n<%= contents %>\n})(window.angular);'))
        
        // concatenate all js into a single file
        .pipe(concat('application.min.js'))
        
        // minify, do not mangle in dev since some browsers can not support it correctly in source maps
        .pipe(uglify({ mangle: !dev_env }));

    if (dev_env) {
        // write the source maps to the js file
        js = js.pipe(sourcemaps.write());
    }
        
    // send to output folder
    return js.pipe(gulp.dest(config.build.output.js));
}
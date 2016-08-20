'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./config');

/**
 * The styles are processed by theme folder
 * Each theme folder creates a new styles.css file in the public directory 
 */
gulp.task('fonts', fonts);
gulp.task('styles', ['fonts'], styles);

/**
 * Copies all fonts to the output folder
 */
function fonts() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.build.output.fonts));
}

/**
 * Builds the less files into css
 */
function styles() {
    return gulp.src(config.src.less)

        // initialize the source map builder
        .pipe(sourcemaps.init())

        // process LESS files into css
        .pipe(less({
            paths: [
                // Allows us to @import anything in the bower folder in less files using relative paths
                path.join(__dirname, '../bower_components')
            ]
        }))

        // rename the files and output them into a folder specific to each "theme"
        .pipe(rename(function (file) {
            // flatten folders and rename to styles.css
            file.dirname = file.dirname.replace(path.sep + 'styles', '');
            file.basename = 'styles';
        }))

        // write the source maps
        .pipe(sourcemaps.write())

        // output
        .pipe(gulp.dest(config.build.output.css));
}
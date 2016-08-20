// This is a global configuration file used by various parts of the application

'use strict';
// Defines that JavaScript code should be executed in "strict mode".
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


module.exports = {

    // This is the source and output file path configuration for the application
    src: {

        // Static content
        content: [
            'src/**/server/**/*.html',
            'src/assets/**/*.pdf'
        ],

        // CSS LESS source files
        // Here we only reference the initial index.less file, which should contain imports for the other .less files.
        less: 'src/assets/**/index.less',

        // Fonts
        // The first line below is useful if using Bootstrap as a Bower dependency
        fonts: [
            'bower_components/bootstrap/dist/fonts/*',
            'src/assets/fonts/*.*(eot|svg|ttf|woff|woff2)'
        ],

        // Images
        img: 'src/assets/**/*.*(png|jpg|gif|svg)',

        // JavaScript files
        js: {

            // Bundles the following vendor files into a single js file for the application
            // Note: these files should *not* be minified
            vendor: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/angular-messages/angular-messages.js',
                'bower_components/ngMask/dist/ngMask.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/moment/moment.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                'bower_components/lodash/lodash.js',
                'bower_components/oclazyload/dist/ocLazyLoad.js',
                'bower_components/angulartics/src/angulartics.js',
                'bower_components/angulartics-adobe-analytics/lib/angulartics-adobe-analytics.js',
                'bower_components/angular-cache/dist/angular-cache.js',
                'lib/ofs-angular/dist/ofs-angular.js',
                'lib/ofs-angular-ui/dist/ofs-angular-ui.js',
                'lib/ofs-angular-ui/dist/ofs-angular-ui-tpls.js'
            ],

            // vendor files that are downloaded individually by the browser and used only when called for
            // we keep these separate to reduce the size of the main js file
            // Note: these files should already be minified
            single: [
                // To be populated later
            ],

            // Angular application file paths
            // Note: The Angular module files must be loaded first
            app: [
                'src/app/client/**/*.module.js',
                'src/app/client/**/*.js'
            ]
        },

        // Angular client-side html templates
        templates: [
            'src/app/client/**/*.view.html',
            'src/app/client/**/*.directive.html',
            'src/app/client/**/*.template.html'
        ],

        // All templates get loaded into their own module
        templateModuleName: 'app.templates'
    },

    // Build paths
    build: {
        output: {
            content: 'public',
            images: 'public/assets',
            fonts: 'public/assets/fonts',
            js: 'public/app/js',
            css: 'public/assets/css'
        }
    }

};
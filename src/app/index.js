'use strict';

const Path = require('path'); // NodeJS 'path' module
const vision = require('vision'); // HTML rendering engine

/**
 * Assets/CDN configuration
 */
var assets = {
    register: require('../assets')
};

/**
 * Theme configuration
 */
var themes = {
    register: require('hapi-themes'),
    options: {
        configFilePath: 'src/assets/**/*.theme.json'
    }
};

/**
 * Registers the server side routes for the application
 */
function register(server, options, next) {

    const plugins = [vision, assets, themes];
    server.register(plugins, () => {

        // Register index route
        // e.g. http://localhost:8080/
        server.route({
            method: 'GET',
            path: '/',
            handler: {
                theme: {
                    template: 'index',
                    layout: 'default',
                    relativeTo: Path.join(__dirname, 'server/views'),
                    model: {
                        appSettings: server.settings.app,
                        clientSettings: JSON.stringify(server.settings.app.clientSettings)
                    }
                }
            }
        });

        // Catch-all route; serve the 404 page
        server.route({
            method: 'GET',
            path: '/{path*}',
            handler: {
                theme: {
                    layout: 'default',
                    template: '404',
                    relativeTo: Path.join(__dirname, 'server/views')
                }
            }
        });

        // Configure server side rendering engine (vision+handlebars)
        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: server.settings.app.server.staticContentPath,
            layout: 'default',
            layoutPath: 'layouts',
            partialsPath: './',
            isCached: server.settings.app.server.enableCache
        });

        return next();
    });
}

exports.register = register;
exports.register.attributes = {
    pkg: {
        name: 'universitysearch',
        version: '1.0.0'
    }
};
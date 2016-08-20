'use strict';

// Static content plugin
const inert = require('inert');

/**
 * Registers routes to serve static content
 */
function register(server, options, next) {

    var plugins = [inert];
    server.register(plugins, () => {
        server.route({
            method: 'GET',
            path: '/public/{path*}',
            handler: {
                directory: {
                    path: './',
                    index: true
                }
            },
            config: {
                // Set cache headers to far-future
                cache: {
                    expiresIn: 1000 * 60 * 60 * 24 * 365 * 10 // 10yrs
                }
            }
        });

        return next();
    });
}

exports.register = register;
exports.register.attributes = {
    pkg: {
        name: 'assets',
        version: '1.0.0'
    }
};
'use strict';

const glob = require('glob'); // Match files using the patterns the shell uses

/**
 * Register the plugin
 */
function register(server, options, next) {
    const plugins = [];
    
    server.register(plugins, () => {
        // Register API routes
        glob('./routes/*.routes.js', {cwd: __dirname}, function(err, matches) {
            matches.forEach(function(filepath) {
                server.route(require(filepath));
            });
            return next();
        });
    });
}

// Hapi.js plugin schema
exports.register = register;
exports.register.attributes = {
    pkg: {
        name: 'api',
        version: '1.0.0'
    }
};
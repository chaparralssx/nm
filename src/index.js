'use strict';

const Hapi = require('hapi');           // A framework for building applications and services
const config = require('./config');     // Application configuration
const api = require('./api');           // REST API
const app = require('./app');           // Website

// Build the server
const server = new Hapi.Server();
server.connection(config.server.connection);
server.settings.app = config;

// Register plugins and kick off the server
const plugins = [app, api];
server.register(plugins, err => {
    if (err) {
        throw err;
    }

    // Engage	
    server.start(err => {
        if (err) {
            throw err;
        }

        console.log('[hapi]', `server running at: ${server.info.uri}`);
    });
});

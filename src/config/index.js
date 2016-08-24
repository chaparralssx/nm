'use strict';

const extend = require('extend');
const Path = require('path');

/**
 * Configuration for all environments
 */
const config = {

    // Base configuration (localhost/development)
    defaults: {
        debug: true,

        // Server configuration 
        server: {
            enableCache: false,
            staticContentPath: 'public',
            connection: {
                address: process.env.OPENSHIFT_NODEJS_IP,
                port: process.env.OPENSHIFT_NODEJS_PORT || 3100,
                router: {
                    stripTrailingSlash: true
                },
                routes: {
                    files: {
                        // Static content directory
                        relativeTo: Path.join(process.cwd(), 'public')
                    }
                }
            }
        },

        // External services
        services: {
            universitiesAPI: {
                host: 'http://universities.hipolabs.com',
                
                // Endpoints
                searchName: '/search?name={name}',
                searchCountry: '/search?country={country}',
                searchNameCountry: '/search?name={name}&country={country}'
            }
        },

        // Client settings are available in angularjs code
        // These settings are exposed to the client in the template HTML
        clientSettings: {
            api: {
                routes: {
                    getUniversities: 'api/universities/{country}/{name}'
                }
            },
            cacheKeys: {
                lookupCache: 'lookupCache'
            }
        }
    },

    // Environment overrides
    env: {
        test: {
            debug: false,
            server: {
                enableCache: true
            }
        },
        stage: {
            debug: false,
            server: {
                enableCache: true
            }
        },
        prod: {
            debug: false,
            server: {
                enableCache: true
            },
            clientSettings: {
            }
        }
    }
};

// Export the configuration by environment
module.exports = extend(true, config.defaults, config.env[process.env.NODE_ENV]);
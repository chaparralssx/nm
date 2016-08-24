'use strict';

// Main application module
angular.module('app', [
    'app.themes',
    'app.templates',
    'ui.router',
    'ngMessages',
    'angular-cache'
]).config(config).run(startup);
	
/**
 * Configure the angular application
 */
function config($urlRouterProvider, $locationProvider, $httpProvider) {
    // Disable HTML 5 mode for theme support
    $locationProvider.html5Mode(false);

    // Start at the default route
    $urlRouterProvider.otherwise('/');
    
    // Options for xsrf protection
    $httpProvider.defaults.xsrfCookieName = 'csrf-token';
    $httpProvider.defaults.xsrfHeaderName = 'x-csrf-token';
}
	
/**
 * Startup initialization
 */
function startup($rootScope, $window, CacheFactory, appSettings) {

    // Setup default caches
    if(!CacheFactory.get(appSettings.cacheKeys.lookupCache)){
        CacheFactory.createCache(appSettings.cacheKeys.lookupCache, {
            maxAge: 30 * 1000 // 30 seconds
        });
    }
}

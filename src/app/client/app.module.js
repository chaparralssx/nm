'use strict';

// main application module
angular.module('app', [
    'app.themes',
    'app.templates',
    'ui.router',
    'ngMessages',
    'angular-cache'
]).config(config).run(startup);
	
/**
 * Configures the angular application
 */
function config($urlRouterProvider, $locationProvider, $httpProvider) {
    // Disable HTML 5 mode for theme support
    $locationProvider.html5Mode(false);

    // Start at the default route
    $urlRouterProvider.otherwise('/');
    
    // options for xsrf protection
    $httpProvider.defaults.xsrfCookieName = 'csrf-token';
    $httpProvider.defaults.xsrfHeaderName = 'x-csrf-token';
}
	
/**
 * Startup initialization
 */
function startup($rootScope, $window, CacheFactory, appSettings) {

    $rootScope.$on('$stateChangeSuccess', function () {
        // Scroll top top of page automagically
        $window.scrollTo(0, 0);
    });

    // Setup some default caches
    if(!CacheFactory.get(appSettings.cacheKeys.lookupCache)){
        CacheFactory.createCache(appSettings.cacheKeys.lookupCache, {
            maxAge: 30 * 1000 // 30 seconds
        });
    }
}

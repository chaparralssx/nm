'use strict';

angular.module('app.default').controller('DefaultController', DefaultController);

/**
 * Handles the layout for the application
 */
function DefaultController(theme) {
    var vm = this;

    // Make the theme available to the view model
    vm.theme = theme;
}
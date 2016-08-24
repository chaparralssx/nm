'use strict';

angular.module('app.default').controller('SearchController', SearchController);

/**
 * Handles Search page actions
 */
function SearchController(universitiesService) {
    var vm = this;
    vm.results = [];

    /**
     * Get a list of universities by name and/or country
     */
    function getUniversities(name, country) {
        if(name || country){
            universitiesService.getUniversities(name, country)
                .then(function(response) {
                    // Update results
                    vm.results = response;
                }, function(){
                    // Reset results
                    vm.results = [];
                });
        }
    }

    vm.search = function(){
        getUniversities(vm.searchName, vm.searchCountry);
    };

    vm.reset = function(){
        vm.results = [];
    };
}
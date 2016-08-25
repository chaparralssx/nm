'use strict';

angular.module('app.default').controller('SearchController', SearchController);

/**
 * Handles Search page actions
 */
function SearchController(universitiesService) {
    var vm = this;
    vm.loading = false;
    vm.results = [];
    
    vm.reset = function(){
        if(vm.loading === false){
            // Clear results
            vm.results = [];
        }
    };
    vm.search = function(){
        if(vm.loading === false){
            vm.loading = true;
            getUniversities(vm.searchName, vm.searchCountry);
        }
    };

    /**
     * Get a list of universities by name and/or country
     */
    function getUniversities(name, country) {
        if(name || country){
            universitiesService.getUniversities(name, country)
                .then(function(response) {
                    // Update results
                    vm.results = response.sort(sortByName);
                    vm.loading = false;
                }, function(){
                    // Reset results
                    vm.results = [];
                    vm.loading = false;
                });
        }
    }

    function sortByName(a,b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
}
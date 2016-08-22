'use strict';

angular.module('app.default').controller('SearchController', SearchController);

/**
 * Handles Search page actions
 */
function SearchController() {
    // TODO: Replace with real data
    var vm = this;
    vm.results = [];

    vm.search = function(){
        vm.results = [
            {
                web_page: 'http://www.witc.edu',
                country: 'United States',
                domain: 'witc.edu',
                name: 'Wisconsin Indianhead Technical College',
                alpha_two_code: 'US'
            },
            {
                web_page: 'http://www.mcw.edu/',
                country: 'United States',
                domain: 'mcw.edu',
                name: 'Medical College of Wisconsin',
                alpha_two_code: 'US'
            },
            {
                web_page: 'http://www.uwosh.edu/',
                country: 'United States',
                domain: 'uwosh.edu',
                name: 'University of Wisconsin - Oshkosh',
                alpha_two_code: 'US'
            },
            {
                web_page: 'http://www.wisc.edu/',
                country: 'United States',
                domain: 'wisc.edu',
                name: 'University of Wisconsin - Madison',
                alpha_two_code: 'US'
            }
        ];
    };

    vm.reset = function(){
        console.log('click');
        vm.results = [];
    };
}
'use strict';

angular.module('app.default').factory('universitiesService', universitiesService);

function universitiesService($http, appSettings){

    /**
     * Get a list of universities with a matching name
     */
    function getUniversities(name, country){
        var uri = appSettings.api.routes.getUniversities.replace('{name}', name).replace('{country}', country);
        return $http.get(uri, {}).then(function(response){
            return response.data;
        });
    }

    return {
        getUniversities: getUniversities
    };
}
'use strict';

var unirest = require('unirest');
const config = require('../../config');

/**
 * Gets universities by name from an opensource API
 * 
 * @param name The university's name
 * @returns A promise object containing matching universities
 */

function getByName(request, name, country) {

    var deferred = Promise.defer();

    let uri = config.services.universitiesAPI.host;
    if(name !== 'undefined' && country !== 'undefined'){
        uri = uri + config.services.universitiesAPI.searchNameCountry;
        uri = uri.replace('{name}', name).replace('{country}', country);
    }
    else if(name !== 'undefined' && country === 'undefined'){
        uri = uri + config.services.universitiesAPI.searchName;
        uri = uri.replace('{name}', name);
    }
    else if(name === 'undefined' && country !== 'undefined'){
        uri = uri + config.services.universitiesAPI.searchCountry;
        uri = uri.replace('{country}', country);
    }
    else {
        // No search parameters provided, so send an error response
        deferred.reject(new Error('Search parameters required'));
    }
    
    unirest.get(uri)
        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
        .end(function (result) {
            deferred.resolve(result.body);
        });
        
    return deferred.promise;
}

module.exports = {
    getByName: getByName
};
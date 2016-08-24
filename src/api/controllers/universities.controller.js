const Boom = require('boom'); // provides a set of utilities for returning HTTP errors
const service = require('../services/universities.service');

/**
 * Returns university information for the given name
 */
function getByName(request, reply) {
    const name = request.params.name;
    const country = request.params.country;

    if(name !== 'undefined' || country !== 'undefined'){
        service.getByName(request, name, country)
            .then(data => {
                if(data) {
                    return reply(data);
                }
                return reply(Boom.notFound('No universities found with name" ' + name + ' and/or country: ' + country + '.'));
            })
            .catch(error => {
                if(error.statusCode === 404) {
                    return reply(Boom.notFound());
                }
                return reply(Boom.badImplementation('Implementation error or problem connecting to the Universities database.'));
            });
    }
    else {
        return reply([]); // Will never match, so return empty array
    }

}

module.exports = {
    getByName: getByName
};
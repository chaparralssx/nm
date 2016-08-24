const controller = require('../controllers/universities.controller');
// TODO: Add validation
// TODO: Add 'country' option

module.exports = [
    {
        method: 'GET',
        path: '/api/universities/{country}/{name}',
        handler: controller.getByName,
        config: {
            description: 'Returns a list of universities with matching name and/or country',
            tags: ['api'] 
        }
    }
];
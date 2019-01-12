'use strict';

const entryPoints = function(server, plugin) {
    server.bind(plugin);

    server.route([
        {
            method : 'GET',
            path   : '/api/menuItem/add',
            handler: plugin.add,
            config : {
                tags       : ['api'],
                description: 'category add API'
            }
        },
        {
            method : 'GET',
            path   : '/api/menuItem/delete',
            handler: plugin.delete,
            config : {
                tags       : ['api'],
                description: 'category delete API'
            }
        },
        {
            method : 'GET',
            path   : '/api/menuItem/select',
            handler: plugin.select,
            config : {
                tags       : ['api'],
                description: 'category select API'
            }
        },
        {
            method : 'GET',
            path   : '/api/menuItem/update',
            handler: plugin.update,
            config : {
                tags       : ['api'],
                description: 'category update API'
            }
        }
    ]);
};

module.exports = entryPoints;

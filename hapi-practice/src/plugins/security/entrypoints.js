'use strict';

const entryPoints = function(server, plugin) {
    server.bind(plugin);

    server.route([
        {
            method : 'GET',
            path   : '/api/security/login',
            handler: plugin.login,
            config : {
                tags       : ['api'],
                description: 'security login API'
            }
        },
        {
            method : 'GET',
            path   : '/api/security/reg',
            handler: plugin.reg,
            config : {
                tags       : ['api'],
                description: 'security reg API'
            }
        }
    ]);
};

module.exports = entryPoints;

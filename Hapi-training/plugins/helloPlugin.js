'use strict';

const myPlugin = {
    name: 'myPlugin',
    version: '1.0.0',
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/test',
            handler: function (request, h) {

                return 'hello, Plugin';
            }
        });

    }
};

exports.plugin = myPlugin;
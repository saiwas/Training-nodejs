'use strict';

const myPluginOptions = {
    name: 'myPluginOptions',
    version: '1.0.0',
    register: async function (server, options) {

        if (options.route) {
            server.route({
                method: options.route.methods || ['GET', 'POST'],
                path: `/${options.route.name || 'test'}`,
                handler: function (request, h) {

                    return (options.route.message || 'Hello world!');
                }
            });
        }

    }
};

exports.plugin = myPluginOptions;
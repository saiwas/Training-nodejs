'use strict';

const packageInfo = require(__dirname + '/../package.json');
const config = require('./config');

/**
 * Manifest for the Service.
 */
const manifest = {
    server: {
        app: {
            slogan: packageInfo.description
        },
        debug: {
            request: ['error']
        },
        port  : process.env.NODE_ENV === 'develop' ? 3000 : 80,
        routes: {
            cors: true
        }
    },
    register: {
        plugins: [
            {
                plugin: 'inert'
            },
            {
                plugin: 'vision'
            },
            {
                plugin : 'hapi-swagger',
                options: {
                    info: {
                        title  : packageInfo.name,
                        version: packageInfo.version
                    },
                    documentationPath: '/specs',
                    jsonEditor       : false
                }
            },
            {
                plugin : require('./plugins/category/plugin'),
                options: config
            },
            {
                plugin : require('./plugins/menuItem/plugin'),
                options: config
            },
            {
                plugin : require('./plugins/security/plugin'),
                options: config
            }
        ]
    }
};

/**
 * Export the Instance to the World
 */
module.exports = manifest;

'use strict';

const entryPoints = require('./entrypoints');

const Plugin = function Plugin() {
    this.options = {};
};


Plugin.prototype = Object.assign(Plugin.prototype, {});

const register = async function(server, options) {
    const instance = new Plugin();
    instance.config(options);

    return await entryPoints(server, instance);
};

module.exports = {
    name   : 'hapi-practice-menuItem',
    version: '1.0.0',
    register
};

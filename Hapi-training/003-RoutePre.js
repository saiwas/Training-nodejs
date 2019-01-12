const Hapi = require('hapi');
const Boom = require('boom');
const util = require('util');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

const userDB = {
    john: { id: 1, meta: 'test' }
};

const connectionDB = {
    john: ['tim', 'bob']
};


const setupDBConnections = function (request, h) {

    request.userDB = userDB;
    request.connectionDB = connectionDB;

    return h.continue;
};

const checkUserExists = function (request, h) {

    console.log('[checkUserExists], name = %s', request.params.name);

    if (!request.userDB[request.params.name]) {
        return Boom.notFound();
    }

    return h.continue;
};

const getUserDetails = function (request, h) {
  
    return h.request.userDB[request.params.name];
};

const getUserConnections = function (request, h) {

    return h.request.connectionDB[request.params.name];
};


server.route({
    method: 'GET',
    path: '/hello/{name}',
    config: {
        description: 'Return an object with a message of hello to the name provided',
        pre: [
            { method: setupDBConnections },
            { method: checkUserExists },                                    // series
            [
                { method: getUserDetails, assign: 'userDetails' },          // parallel
                { method: getUserConnections, assign: 'userConnections' }   // parallel
            ]
         ],
        handler: function (request, h) {

            const user = request.pre.userDetails;
            user.connections = request.pre.userConnections;

            const time = (new Date().getTime() - request.info.received) / 1000;
            console.log(`Request time taken: ${time}`);

            return user;
        }
    }
});


const start = async function() {

    try {
        await server.start();

        console.log('Server running at:', server.info.uri);

    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

start();
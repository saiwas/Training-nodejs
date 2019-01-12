const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {

        return 'Hello World\n';
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
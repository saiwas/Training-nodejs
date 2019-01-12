const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/hello/{name}',
    config: {
        description: 'Return an object with a message of hello to the name provided',
        pre: [],
        handler: function (request, h) {

            const name = request.params.name;
            return { message: `Hello ${name}` };
        },
        cache: {
            expiresIn: 3600000
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
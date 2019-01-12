const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

const start = async function() {

    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './public',
                index: ['index.html', 'default.html']
            }
        }
    });

    try {
        await server.start();

        console.log('Server running at:', server.info.uri);

    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

start();
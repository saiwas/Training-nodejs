const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});


const start = async function() {

    try {

        await server.register(require('blipp'));

        await server.register(require('./plugins/helloPlugin'));

        await server.start();

        console.log('Server running at:', server.info.uri);

    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

start();
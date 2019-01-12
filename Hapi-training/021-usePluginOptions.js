const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});


const start = async function() {

    try {

        await server.register(require('hapi-response-time'));

        await server.register({
            plugin: require('./plugins/helloPluginOption'), 
            options: {
                //route: true,
                route: {
                    name: 'my',
                    message: 'Hello from MyAwesomePlugin'
                }
            }
        });

        await server.start();

        console.log('Server running at:', server.info.uri);

    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

start();
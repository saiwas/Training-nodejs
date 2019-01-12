const Hapi = require('hapi');
const Stream = require('stream');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

server.route([
    {
        method: 'GET',
        path: '/null',
        handler: function (request, h) {

            return null;
        }
    },
    {
        method: 'GET',
        path: '/string',
        handler: function (request, h) {

            return 'string';
        }
    },
    {
        method: 'GET',
        path: '/number',
        handler: function (request, h) {

            return 42;
        }
    },
    {
        method: 'GET',
        path: '/boolean',
        handler: function (request, h) {

            return true;
        }
    },
    {
        method: 'GET',
        path: '/buffer',
        handler: function (request, h) {

            const buffer = new Buffer('This is a string in a buffer!', 'utf-8');
            return buffer;
        }
    },
    {
        method: 'GET',
        path: '/error',
        handler: function (request, h) {

            return new Error('this is an error');
        }
    },
    {
        method: 'GET',
        path: '/stream',
        handler: function (request, h) {

            const stream = new Stream.Readable();
            stream.push('first chunk ');
            stream.push('second chunk');
            stream.push(null); // We are done pushing data
            return stream;
        }
    },
    {
        method: 'GET',
        path: '/promise',
        handler: function (request, h) {

            const promise = new Promise((resolve, reject) => {

                return resolve({ firstAction: 'Do an intial action' });
            });
            promise.then((response) => {

                response.secondAction = 'A second action was performed';
                return response;
            });
            return promise;
        }
    },
    {
        method: 'GET',
        path: '/object',
        handler: function (request, h) {

            return { 'description': 'this is a sample object being returned' };
        }
    },
    {
        method: 'GET',
        path: '/array',
        handler: function (request, h) {

            return [1, 2, 'test', { 'sample': 'object' }];
        }
    }
]);

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
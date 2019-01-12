const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'POST',
    path: '/data/{id}',
    handler: function (request, h) {
        console.log('handler POST')
        return `Trying to add data for id:${request.params.id}. Payload: ${JSON.stringify(request.payload)}`;
    },
    options: {
        validate: {
            params: {
                id: Joi.number()
                    .min(1)
                    .max(5)
            },
            payload: Joi.object({
                id: Joi.number(),
                url: Joi.string()
                    .uri()
            })
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
'use strict';

const store = require('../utils/store');

const handler = (req, res, postBody) => {
    store.update(postBody)
    res.write(JSON.stringify({ 'succ': true}));
}

module.exports = {
    path: '/api/todos/update',
    method: 'POST',
    handle: handler
}
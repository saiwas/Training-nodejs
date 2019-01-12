'use strict';

const store = require('../utils/store');

const handler = (req, res, postBody) => {
    const result = store.create(postBody)
    res.write(JSON.stringify({...result}));
}

module.exports = {
    path: '/api/todos/add',
    method: 'POST',
    handle: handler
}

'use strict';

const store = require('../utils/store');

const handler = (req, res, postBody) => {
    const token = store.login(postBody.userName, postBody.password)
    res.write(JSON.stringify({token}));
}

module.exports = {
    path: '/api/login',
    method: 'POST',
    handle: handler
}
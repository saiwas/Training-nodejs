'use strict';

const store = require('../utils/store');

const handler = (req, res, postBody) => {
      const result = {
        'succ': true,
        'errCode': '',
        'errorMessage': '',
        'data': store.listAll()
      }
      res.write(JSON.stringify(result));
}

module.exports = {
    path: '/api/todos/list',
    method: 'GET',
    handle: handler
}
'use strict';

const fs        = require('fs');
const path      = require('path');
const Events    = require('events');
const emitter   = new Events.EventEmitter();
const routerPath = __dirname + '/routers';

fs.readdirSync(routerPath)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const router = require(path.join(routerPath, file));
    emitter.on(`${router.method}${router.path}`, router.handle)
  });

module.exports = (req, res, postBody) => {
  emitter.emit(`${req.method}${req.url}`, req, res, postBody);
}

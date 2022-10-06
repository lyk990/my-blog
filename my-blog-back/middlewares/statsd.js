'use strict';

const statsdClient = require('../lib/statsd');

module.exports = function () {
  return function *statsd(next) {
    const routerName = this.route ? this.route.handler.controller + '.' + this.route.handler.action : null;
    const start = Date.now();

    yield next;

    const spent = Date.now() - start;
    if (routerName) {
      statsdClient.timing(`api.${routerName}`, spent);
      statsdClient.timing('api', spent);
    }
  };
};
const StatsD = require('node-statsd');

module.exports = new StatsD({
  host: 'localhost',
  port: 5000
});

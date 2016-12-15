const cp = require('child_process');

module.exports = function (cb) {
  cp.exec('npm install', cb)
}
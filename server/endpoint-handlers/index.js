'use strict';

module.exports = function(params) {
  return {
    hello: require('./hello')(params),
    todo: require('./todo')(params),
    todos: require('./todos')(params),
  };
};
'use strict';

var todos = require( "./../../todos/todos.json" );

module.exports = function () {
  return {
    get: function (request, reply) {
      reply(todos);
    }
  }
};
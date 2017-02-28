'use strict';

const _ = require('lodash');
const todos = require( "./../../todos/todos.json" );

module.exports = function () {
  return {
    get: function (request, reply) {
      var id = request.params.id;
      
      reply(_.find(todos, {id}));
    },
  }
};
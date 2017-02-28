'use strict';

const Hapi = require('hapi');
var Joi = require('joi');

const server = new Hapi.Server();
server.connection({ 
  port: 3000, 
  host: 'localhost' 
});

var handlers = require('./endpoint-handlers')();

server.route({
    method: 'GET',
    path: '/hello',
    handler: handlers.hello.greetWorld,
});

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: handlers.hello.greetSpecific,
    config: {
      validate: {
        params: {
          name: Joi.string().min(1).max(20).trim().required(),
        },
      },
    }
});

server.route({
    method: 'GET',
    path: '/todos',
    handler: handlers.todos.get,
});

server.route({
    method: 'GET',
    path: '/todo/{id}',
    handler: handlers.todo.get,
    config: {
      validate: {
        params: {
          id: Joi.number().min(1).required(),
        },
      },
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
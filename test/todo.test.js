'use strict';

const request = require('supertest');
const expect = require('chai').expect;

const app = 'http://localhost:3000';

describe('GET /todo', function() {
  it('respond with a specific todo item', function() {
    var idTodo = 2;

    return request(app)
      .get(`/todo/${idTodo}`)
      .then(response => {
        expect(response.body.todo).to.equal("become a QA Engineer");
      })
  });
});

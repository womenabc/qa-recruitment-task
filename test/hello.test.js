'use strict';

const request = require('supertest');
const expect = require('chai').expect;

const app = 'http://localhost:3000';

describe('GET /hello', function() {
  it('respond with a specific hello message', function() {
  let testMessage = 'test_message_123'

    return request(app)
      .get(`/hello/${testMessage}`)
      .expect(200)
      .then(response => {
        expect(response.text).to.equal(`Hello, ${testMessage}!`);
      })
  });

  it('respond 404 when empty name was given', function() {
    return request(app)
      .get(`/hello/`)
      .expect(404);
  });

  it('respond 400 for a too long name', function() {
    return request(app)
      .get(`/hello/aaaaabbbbbcccccddddde`)
      .expect(400);
  });
});

const index = require('./index');
const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', index);

test('index route works', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ name: 'Tony' })
    .expect(200, done);
});

test('testing route works', (done) => {
  request(app)
    .post('/test')
    .type('form')
    .send({ item: 'Bye' })
    .then(() => {
      request(app)
        .get('/test')
        .expect({ array: ['Bye'] }, done);
    });
});

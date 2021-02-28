const request = require('supertest');
const express = require('express');

const app = express();





test('checks that json is returned', () => {
    app.get('/user', function(req, res) {
        res.status(200).json({ topping: 'cherry' });
    });
    request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '20')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });
});
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'user.monitor1',
  password: '12345'
};

const invalidBody = {
  username: 'user.monitor1',
  password: 'invalid_password'
};


test('login without any argument (error schema validator)', async () => {
  const response = await request(app).post('/monitoring-admin/login')
    .set('Content-type', 'application/json');
  expect(response.text).toBe('invalid argument for username or password');
  expect(response.status).toBe(400);
});


// TODO: ta inja neveshtam ke login hamaro token midad 

test('login route with body', async () => {
  const response = await request(app).post('/monitoring-admin/login')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.status).toBe(200);
});


test('login with invalid username password ', async () => {
  const response = await request(app).post('/monitoring-admin/login')
    .send(invalidBody)
    .set('Content-type', 'application/json');
  expect(response.status).toBe(400);
  expect(response.text).toBe('username or password is not correct !!!');
});

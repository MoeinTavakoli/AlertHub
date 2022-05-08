/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'moeen.monia.admin',
  password: '12345'
};

const invalidBody = {
  username: 'moeen.monia.admin',
  password: 'invalid_password'
};


const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGhvbmVOdW1iZXIiOiIwOTEwODI5NTU4OSIsInJvbGUiOiJNT05JQV9BRE1JTiIsImlhdCI6MTY1MDk1NDAxM30.rJCgv9b503h6XqD3fHDLhx8Gi7U_3fQM4FKhpsYIFbs';


test('login without any argument (error schema validator)', async () => {
  const response = await request(app).post('/user/login')
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('invalid argument for username or password');
  expect(response.status).toBe(400);
});




test('login route with body', async () => {
  const response = await request(app).post('/user/login')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
});


test('login with invalid username password ', async () => {
  const response = await request(app).post('/user/login')
    .send(invalidBody)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('username or password is not correct ...');
});

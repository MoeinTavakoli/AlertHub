/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'new.moniaAdmin5',
  password: '12345',
  phoneNumber: '09100000000',
  role: 'MONIA_ADMIN'
};




const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGhvbmVOdW1iZXIiOiIwOTEwODI5NTU4OSIsInJvbGUiOiJNT05JQV9BRE1JTiIsImlhdCI6MTY1MDk1NDAxM30.rJCgv9b503h6XqD3fHDLhx8Gi7U_3fQM4FKhpsYIFbs';


test('create user without any argument (error schema validator)', async () => {
  const response = await request(app).post('/user/user/create')
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert username in body ');
  expect(response.status).toBe(400);
});

test('create user without token for auth', async () => {
  const response = await request(app).post('/user/user/create')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('create user with body', async () => {
  const response = await request(app).post('/user/user/create')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
  expect(response.text).toBe('user created');
});



test('create user after create prev username ', async () => {
  const response = await request(app).post('/user/user/create')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.body.code).toBe('P2002');
});

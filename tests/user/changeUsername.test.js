/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  newUsername: 'moeen.monia.admin'
};



const username = 'new.moeen.moniaAdmin';

const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGhvbmVOdW1iZXIiOiIwOTEwODI5NTU4OSIsInJvbGUiOiJNT05JQV9BRE1JTiIsImlhdCI6MTY1MDk1NDAxM30.rJCgv9b503h6XqD3fHDLhx8Gi7U_3fQM4FKhpsYIFbs';


test('change username without any argument (error schema validator)', async () => {
  const response = await request(app).put(`/user/username/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert newUsername in body ');
  expect(response.status).toBe(400);
});

test('change username without token for auth', async () => {
  const response = await request(app).put(`/user/username/${username}`)
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('change username with body', async () => {
  const response = await request(app).put(`/user/username/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
  expect(response.text).toBe('username changed');
});



test('change username after change prev username ', async () => {
  const response = await request(app).put(`/user/username/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('couldnt change the username ');
});

/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'ROOT',
  password: 'monia2litemonia'
};

const invalidBody = {
  username: 'ROOT',
  password: 'invalid_password'
};


const monitoringAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJPT1QiLCJwYXNzd29yZCI6Im1vbmlhMmxpdGVtb25pYSIsInBob25lTnVtYmVyIjoiMDkwMDAwMDAwMDAiLCJyb2xlIjoiUk9PVCIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjRUMTE6NTk6MjYuMjU5WiIsInVwZGF0ZWRBdCI6IjIwMjItMDQtMjRUMTE6NTk6MjYuMjU5WiIsImlzRGVsZXRlZCI6ZmFsc2UsImlhdCI6MTY1MDk0OTU3Nn0.TfOvKx0tZ971Gn8A_sfIm1Mu_k6U4UYI0yquXTKI7sE';


test('login without any argument (error schema validator)', async () => {
  const response = await request(app).post('/root/login')
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.text).toBe('invalid argument for username or password');
  expect(response.status).toBe(400); 
});




test('login route with body', async () => {
  const response = await request(app).post('/root/login')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.status).toBe(200);
});


test('login with invalid username password ', async () => {
  const response = await request(app).post('/root/login')
    .send(invalidBody)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.status).toBe(400); 
  expect(response.text).toBe('username or password is not correct !');
});

/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'user.mmd.mmdi',
  targetAddress: 'https://www.google.com',
  method: 'http_request'
};

const monitoringAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIubW9uaXRvciIsInBhc3N3b3JkIjoiMTIzNDUiLCJwaG9uZU51bWJlciI6IjA5MTk4ODg3NzY2Iiwicm9sZSI6Ik1PTklUT1JJTkdfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA4MDM1OTF9.1z5WwnkPp-w4MJahc3uWQTz0DVrtxVM6opknTCrin0k';


test('create targetContact without any argument (error schema validator)', async () => {
  const response = await request(app).post('/target/user')
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.text).toBe('targetAddress and username must be inserted !!!');
  //   expect(response.status).toBe(400); TODO: bug fix at change statusCode
});


test('create targetCOntact without token for auth', async () => {
  const response = await request(app).post('/target/user')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('create targetContact route with body', async () => {
  const response = await request(app).post('/target/user')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.text).toBe('assign user to target successfuly');
  expect(response.status).toBe(200);
});


test('create targetContact with body and repetitive', async () => {
  const response = await request(app).post('/target/user')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  // expect(response.status).toBe(400); TODO: change status code 
  expect(response.body.code).toBe('P2002');
});


/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
teamName: 'network',
  username: 'easy.user'
};

const monitoringAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIubW9uaXRvciIsInBhc3N3b3JkIjoiMTIzNDUiLCJwaG9uZU51bWJlciI6IjA5MTk4ODg3NzY2Iiwicm9sZSI6Ik1PTklUT1JJTkdfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA4MDM1OTF9.1z5WwnkPp-w4MJahc3uWQTz0DVrtxVM6opknTCrin0k';


test('add user to team  without any argument !!!', async () => {
  const response = await request(app).post('/team/user')
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.text).toBe('teamName and username must be inserted !!');
    expect(response.status).toBe(400); // TODO: bug fix at change statusCode
});


test('add user to team route without token for auth', async () => {
  const response = await request(app).post('/team/user')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('add user to team route with body', async () => {
  const response = await request(app).post('/team/user')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.text).toBe('assign user to target successfuly');
  expect(response.status).toBe(200);
});


test('create team route with body and repetitive ', async () => {
  const response = await request(app).post('/team/user')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  // expect(response.status).toBe(400); TODO: bug fix and change statusCode 
  expect(response.body.code).toBe('P2003');
});



// TODO : add exept when user not found 
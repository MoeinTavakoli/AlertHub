/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  phoneNumber: '09108295589'
};

const invalidBody = {
  phoneNumber: '000000'
};

const username = 'user.contact';

const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIubW9uaXRvciIsInBhc3N3b3JkIjoiMTIzNDUiLCJwaG9uZU51bWJlciI6IjA5MTk4ODg3NzY2Iiwicm9sZSI6Ik1PTklUT1JJTkdfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA4MDM1OTF9.1z5WwnkPp-w4MJahc3uWQTz0DVrtxVM6opknTCrin0k';


test('login without any argument (error schema validator)', async () => {
  const response = await request(app).put(`/monitoring-admin/phone/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert phoneNumber in body');
  expect(response.status).toBe(400);
});




test('login route with body', async () => {
  const response = await request(app).put(`/monitoring-admin/phone/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert 11 digit as phoneNumber');

});


test('update phone with invalid phone number ', async () => {
  const response = await request(app).put(`/monitoring-admin/phone/${username}`)
    .send(invalidBody)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('please insert 11 digit as phoneNumber');
});

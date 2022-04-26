/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  phoneNumber: '09108295589'
};

const invalidBody = {
  phoneNumber: '000000'
};

const username = 'moeen.monia.admin';

const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGFzc3dvcmQiOiIxMjM0NSIsInBob25lTnVtYmVyIjoiMDkxMDgyOTU1ODkiLCJyb2xlIjoiTU9OSUFfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA5NTQwMTN9.kSu30JnPHKToN-tIAG3tKPvnxw_7acdUBPSuavr2N-0';


test('login without any argument (error schema validator)', async () => {
  const response = await request(app).put(`/monia-admin/phone/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert phoneNumber in body');
  expect(response.status).toBe(400);
});




test('login route with body', async () => {
  const response = await request(app).put(`/monia-admin/phone/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
});


test('login with invalid username password ', async () => {
  const response = await request(app).put(`/monia-admin/phone/${username}`)
    .send(invalidBody)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('please insert 11 digit as phoneNumber');
});

/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  newUsername: 'moeen.monia.admin'
};



const username = 'new.moeen.moniaAdmin';

const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGFzc3dvcmQiOiIxMjM0NSIsInBob25lTnVtYmVyIjoiMDkxMDgyOTU1ODkiLCJyb2xlIjoiTU9OSUFfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA5NTQwMTN9.kSu30JnPHKToN-tIAG3tKPvnxw_7acdUBPSuavr2N-0';


test('change username without any argument (error schema validator)', async () => {
  const response = await request(app).put(`/monia-admin/username/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert newUsername in body ');
  expect(response.status).toBe(400);
});

// TODO: test auth


test('change username with body', async () => {
  const response = await request(app).put(`/monia-admin/username/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
  expect(response.text).toBe('username changed');
});



test('change username after change prev username ', async () => {
  const response = await request(app).put(`/monia-admin/username/${username}`)
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('couldnt change the username ');
});

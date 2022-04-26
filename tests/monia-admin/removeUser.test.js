/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'new.moniaAdmin3'
};




const moniaAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZWVuLm1vbmlhLmFkbWluIiwicGFzc3dvcmQiOiIxMjM0NSIsInBob25lTnVtYmVyIjoiMDkxMDgyOTU1ODkiLCJyb2xlIjoiTU9OSUFfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI2VDA2OjE5OjU3LjU5OVoiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA5NTQwMTN9.kSu30JnPHKToN-tIAG3tKPvnxw_7acdUBPSuavr2N-0';


test('remove user without any argument (error schema validator)', async () => {
  const response = await request(app).delete('/monia-admin/user/delete')
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.text).toBe('please insert username in body ');
  expect(response.status).toBe(400);
});

test('remove user without token for auth', async () => {
  const response = await request(app).delete('/monia-admin/user/delete')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('remove user with body', async () => {
  const response = await request(app).delete('/monia-admin/user/delete')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(200);
  expect(response.text).toBe('delete successfuly');
});



test('remove user after remove prev username ', async () => {
  const response = await request(app).delete('/monia-admin/user/delete')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', moniaAdminToken);
  expect(response.status).toBe(400);
  expect(response.text).toBe('cant find to delete , maybe deleted !!!');
});

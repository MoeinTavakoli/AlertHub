/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');


const body = {
  username: 'sample.moniaAdmin',
  password: '12345',
  phoneNumber: '09108299589',
  role: 'MONIA_ADMIN'
};

const rootToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJPT1QiLCJwYXNzd29yZCI6Im1vbmlhMmxpdGVtb25pYSIsInBob25lTnVtYmVyIjoiMDkwMDAwMDAwMDAiLCJyb2xlIjoiUk9PVCIsImNyZWF0ZWRBdCI6IjIwMjItMDQtMjRUMTE6NTk6MjYuMjU5WiIsInVwZGF0ZWRBdCI6IjIwMjItMDQtMjRUMTE6NTk6MjYuMjU5WiIsImlzRGVsZXRlZCI6ZmFsc2UsImlhdCI6MTY1MDk0OTU3Nn0.TfOvKx0tZ971Gn8A_sfIm1Mu_k6U4UYI0yquXTKI7sE';



test('remove monia admin without any argument !!!', async () => {
  const response = await request(app).delete('/root/admin-monia/delete')
    .set('Content-type', 'application/json');
  expect(response.text).toBe('username must be inserted !!');
  expect(response.status).toBe(400);
});


test('remove monia-admin without token for auth', async () => {
  const response = await request(app).delete('/root/admin-monia/delete')
    .send(body)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('remove monia-admin with body', async () => {
  const response = await request(app).delete('/root/admin-monia/delete')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', rootToken);
  expect(response.text).toBe('monia-admin deleted ...');
  expect(response.status).toBe(200);
});


test('remove moniad-admin with body and repetitive', async () => {
  const response = await request(app).delete('/root/admin-monia/delete')
    .send(body)
    .set('Content-type', 'application/json')
    .set('Authorization', rootToken);
  expect(response.status).toBe(400);
  expect(response.body.code).toBe('P2025');
});

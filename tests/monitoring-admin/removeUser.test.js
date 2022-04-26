/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../loader/server');



const username = 'user.monitor1';

const monitoringAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIubW9uaXRvciIsInBhc3N3b3JkIjoiMTIzNDUiLCJwaG9uZU51bWJlciI6IjA5MTk4ODg3NzY2Iiwicm9sZSI6Ik1PTklUT1JJTkdfQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI0VDEyOjMxOjU3LjU2N1oiLCJpc0RlbGV0ZWQiOmZhbHNlLCJpYXQiOjE2NTA4MDM1OTF9.1z5WwnkPp-w4MJahc3uWQTz0DVrtxVM6opknTCrin0k';



test('remove user without token for auth', async () => {
  const response = await request(app).delete(`/monitoring-admin/delete/${username}`)
    .set('Content-type', 'application/json');
  expect(response.text).toBe('token not found !');
});



test('remove user with body', async () => {
  const response = await request(app).delete(`/monitoring-admin/delete/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
  expect(response.status).toBe(200);
    expect(response.text).toBe('monitorng admin deleted');
});



test('remove user after remove prev username ', async () => {
  const response = await request(app).delete(`/monitoring-admin/delete/${username}`)
    .set('Content-type', 'application/json')
    .set('Authorization', monitoringAdminToken);
    expect(response.status).toBe(400); 
  expect(response.text).toBe('user didnt deleted  !!!');
});

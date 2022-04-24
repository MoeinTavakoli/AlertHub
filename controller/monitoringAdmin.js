const db = require('../db/monitoringAdmin');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createMonitoringAdmin(req, res) {
  const { username, password, phoneNumber } = req.body;
  const result = await db.createMonitoringAdmin(username, password, phoneNumber);
  if (!result) return res.status(400).send('create monitoring admin failed');
  res.send('monitoring admin created ...');
}


module.exports = {
  createMonitoringAdmin
};
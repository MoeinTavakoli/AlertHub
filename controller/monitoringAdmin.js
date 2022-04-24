const db = require('../db/monitoringAdmin');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createMonitoringAdmin(req, res) {
  try {
    const { username, password, phoneNumber, role } = req.body;
    const result = await db.createMonitoringAdmin(username, password, phoneNumber, role || 'CONTACT');
    if (!result) return res.status(400).send('create monitoring admin failed');
    res.send('monitoring admin created ...');
  }
  catch (error) {
    res.status(400).send(error);
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function deleteMonitoringAdmin(req, res) {
  try {
    const username = req.params.username;
    const result = await db.deleteMonitoringAdmin(username);
    if (result.count == 0) return res.status(400).send('user didnt deleted  !!!');
    res.send('monitorng admin deleted');
  }
  catch (error) {
    res.status(400).send(error);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function changeUsername(req, res) {
  try {
    const oldUsername = req.params.username;
    const { newUsername } = req.body;
    const result = await db.changeUsername(oldUsername, newUsername);
    if (result.count == 0) return res.status(400).send('didnt change username !!!');
    res.send('username changed');
  }
  catch (error) {
    res.status(400).send(error);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function changePassword(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const { username } = req.params;
    const { password } = req.body;
    const result = await db.updatePassword(username, password);
    if (result.count == 0) return res.status(400).send('didnt changed password !!!');
    res.send('password changed ...');

  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updatePhoneNumber(req, res) {
  try {
    const { username } = req.params;
    const { phoneNumber } = req.body;
    const result = await db.updatePhoneNumber(username, phoneNumber);
    if (result.count == 0) return res.status(400).send('didnt changed phoneNumber !!!');
    res.send('phoneNumber changed ...');

  }
  catch (error) {
    res.status(400).send(error);
  }
}


module.exports = {
  createMonitoringAdmin,
  deleteMonitoringAdmin,
  changeUsername,
  changePassword,
  updatePhoneNumber
};
const { generateToken } = require('../utils/jwt');
const db = require('../db/user');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function login(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const { username, password } = req.body;
    const payload = await db.login(username, password);
    if (!payload) return res.status(400).send('username or password is not correct ...');
    res.send(generateToken(payload));
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
async function createUser(req, res) {
  try {
    const { username, password, phoneNumber, role } = req.body;
    const result = await db.create(username, password, phoneNumber, role);
    if (!result) return res.status(400).send('cant create user');
    res.send('user created ...');
  }
  catch (err) {
    res.status(400).send(err);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function deleteUser(req, res) {
  try {
    const username = req.params.username;
    const result = await db.deleteUser(username);
    if (result.count == 0) return res.status(400).send('user not found to delete !!!');
    res.send('user deleted ...');
  }
  catch (err) {
    res.status(400).send(err);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updatePhoneNumber(req, res) {
  try {
    const username = req.params.username;
    const phoneNumber = req.body.phoneNumber;
    const result = await db.updatePhoneNumber(username, phoneNumber);
    if (result.count == 0) return res.status(400).send('user not found to change phone number !!!');
    res.send('phone number updated ...');
  }
  catch (err) {
    res.status(400).send(err);
  }
}



/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updatePassword(req, res) {
  try {
    const username = req.params.username;
    const password = req.body.password;
    const result = await db.updatePassword(username, password);
    if (result.count == 0) return res.status(400).send('user not found to change password !!!');
    res.send('password updated ...');
  }
  catch (err) {
    res.status(400).send(err);
  }
}




/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updateUsername(req, res) {
  try {
    const oldUsername = req.params.username;
    const newUsername = req.body.newUsername;
    const result = await db.updateUsername(oldUsername, newUsername);
    if (result.count == 0) return res.status(400).send('user not found ro change username !!!');
    res.send('username updated ...');
  }
  catch (err) {
    res.status(400).send(err);
  }
}
module.exports = {
  login,
  createUser,
  deleteUser,
  updatePhoneNumber,
  updatePassword,
  updateUsername
};
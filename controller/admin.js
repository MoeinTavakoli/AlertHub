const { generateToken } = require('../utils/jwt');
const db = require('../db/admin');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function login(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const username = req.body.username;
    const password = req.body.password;

    const payload = await db.login(username, password);
    if (!payload) return res.send('username or password is not correct ...');
    res.send(generateToken(payload));
  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
async function updatePhoneUsers(req, res) {
  try {
    const username = req.params.username;
    const phoneNumber = req.body.phoneNumber;

    const result = await db.updatePhoneUsers(username, phoneNumber);
    if (!result) return res.send('faild to update phone number ...');
    res.send('update successfuly ...');

  }
  catch (error) {
    res.send(error);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createUser(req, res) {
  try {
    const { username, password, phoneNumber } = req.body;

    const result = await db.createUser(username, password, phoneNumber);
    if (!result) return res.send('create user failed !!!');
    res.send('user created');

  }
  catch (error) {
    res.send(error);
  }
}



module.exports = {
  login,
  updatePhoneUsers,
  createUser
};
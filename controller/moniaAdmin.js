const { generateToken } = require('../utils/jwt');
const db = require('../db/MoniaAdmin');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function loginMoniaAdmin(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const username = req.body.username;
    const password = req.body.password;

    const payload = await db.loginMoniaAdmin(username, password);
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
    if (result.count == 0) return res.send('faild to update phone number maybe you didnt have permission !');
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
    const { username, password, phoneNumber, role } = req.body;

    if (role == 'ROOT') return res.status(400).send('permission denied ! you cant add root user ');

    const result = await db.createUser(username, password, phoneNumber, role);
    if (!result) return res.send('create user failed !!!');
    res.send('user created');

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
async function deleteUser(req, res) {
  try {
    const { username } = req.body;
    const result = await db.deleteMoniaAdmin(username);
    if (result.count == 0) return res.send('cant find to delete , maybe deleted !!!');
    res.send('edit successfuly');

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
    const newUsername = req.body.newUsername;
    const result = await db.changeUsername(oldUsername, newUsername);
    if (!result) return res.status(400).send('couldnt change the username ');
    res.send('username changed');
  }
  catch (error) {
    res.status(400).send(error);
  }
}



module.exports = {
  loginMoniaAdmin,
  updatePhoneUsers,
  createUser,
  deleteUser,
  changeUsername
};
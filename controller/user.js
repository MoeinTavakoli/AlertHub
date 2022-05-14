const { generateToken } = require('../utils/jwt');
const db = require('../db/user');
const { compairPassword, hashPassword } = require('../utils/bcrypt');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
async function login(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const { username, password } = req.body;
    const payload = await db.login(username);
    if (!payload) return res.status(401).send('username or password is not correct !!!');
    const isCorrectUser = await compairPassword(password.trim(), payload.password);
    if (!isCorrectUser) return res.status(401).send('username or password is not correct !!!');
    res.send(generateToken({ username: payload.username, role: payload.role , userID : payload.userID }));
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
    const hashedPassword = await hashPassword(password.trim());
    const result = await db.createUser(username, hashedPassword, phoneNumber, role);
    if (!result) return res.status(400).send('cant create user');
    res.send('user created ...');
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({ code: error.code, message: 'username already exsits !' });

    res.status(400).send(error);
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function deleteUser(req, res) {
  try {
    const userID = req.params.userID;
    const result = await db.deleteUser(userID);
    if (result.count == 0) return res.status(400).send('user not found or deleted !');
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
    const userID = req.params.userID;
    const password = req.body.password;
    const hashedPassword = await hashPassword(password.trim());
    const result = await db.updatePassword(userID, hashedPassword);
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
    const {userID} = req.params;
    const {newUsername} = req.body;
    const result = await db.updateUsername(userID, newUsername);
    if (result.count == 0) return res.status(400).send('user not found !!!');
    res.send('username updated ...');
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
async function getAllUsers(req,res) {
  try {
    const accessRoles = req.accessRoles;
    const users = await db.getAllUsers(accessRoles);
    res.json({success : true ,accessRoles ,  users  });
  }
  catch (error) {
    res.status(400).json({success : false , error});
  }
}

module.exports = {
  login,
  createUser,
  deleteUser,
  updatePhoneNumber,
  updatePassword,
  updateUsername,
  getAllUsers
};
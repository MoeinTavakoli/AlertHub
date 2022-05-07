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
    const { username,password,phoneNumber,role} = req.body;
    const result  = await db.create(username , password , phoneNumber , role);
    if (!result) return res.status(400).send('cant create user');
    res.send('user created ...'); 
  }
  catch (err) {
    res.status(400).send(err);
  }
}


module.exports = {
  login,
  createUser
};
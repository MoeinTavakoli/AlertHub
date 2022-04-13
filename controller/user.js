const db = require('../db/user');

const { generateToken } = require('../utils/jwt');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function signup(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phoneNumber;

    const result = await db.signup(username, password, phone);
    res.send(result);
  }
  catch (error) {
    res.send(error);
  }
}



/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * @returns token or error authentication 
 */
async function login(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const result = await db.login(username, password);
    if (!result) return res.status(401).send('username or password is not correct ! ');
    res.send(generateToken(result));
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
async function changePhoneNumber(req, res) {
  const phoneNumber = req.body.phoneNumber;
  const username = req.info.username;
  const result = await db.changePhoneNumber(username, phoneNumber);
  if (!result) return res.send('error eccoured !');
  res.send('phone number changed successfuly ...');

}



module.exports = {
  signup,
  login,
  changePhoneNumber
};
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


module.exports = {
  login
};
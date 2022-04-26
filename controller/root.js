const db = require('../db/root');
const { generateToken } = require('../utils/jwt.js');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const loginRoot = async (req, res) => {
  try {
    const { username, password } = req.body;
    const payload = await db.loginRoot(username, password);
    
    if (payload.password !== password) return res.status(400).send('username or password is not correct !');
    res.send(generateToken(payload));
  }
  catch (error) {
    res.status(400).send(error);
  }
};




/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
const createMoniaAdmin = async (req, res) => {
  try {
    const { username, password, phoneNumber, role } = req.body;
    const result = await db.addMoniaAdmin(username, password, phoneNumber, role);
    if (!result) return res.status(400).send('admin monia didnt created !!!');
    res.send('monia-admin created ...');
  }
  catch (error) {
    res.status(400).send(error);
  }
};


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
const removeMoniaAdmin = async (req, res) => {
  try {
    const { username } = req.body;
    const result = await db.deleteMoniaAdmin(username);
    if (result) return res.send('monia-admin deleted ...');
    res.status(400).send('admin monia didnt find to delete !!!');
  }
  catch (error) {
    res.status(400).send(error);
  }
};



module.exports = {
  loginRoot,
  createMoniaAdmin,
  removeMoniaAdmin
};
const db = require('../db/root');

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
    if (result.count == 0) return res.status(400).send('admin monia didnt find to delete !!!');
    res.send('monia-admin deleted ...');
  }
  catch (error) {
    res.status(400).send(error);
  }
};



module.exports = {
  createMoniaAdmin,
  removeMoniaAdmin
};
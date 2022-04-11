const { addTarget, removeTarget } = require('../db/target');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createTarget(req, res) {
  try {

    const address = req.body.address;
    const result = await addTarget( address);
    if (!result) return res.send('create target failed ');
    res.send('target created ...');
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
async function deleteTarget(req, res) {

  try {
    const address = req.body.address;
    const result = await removeTarget(address);
    if (!result) return res.send('delete target failed ');
    res.send('target deleted ...');
  }
  catch (error) {
    res.send(error);
  }
}




module.exports = {
  createTarget,
  deleteTarget
};
const { addTargetWithError, removeTarget } = require('../db/target');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createTarget(req, res) {
  try {

    const address = req.body.address;
    const method = req.body.method;
    const result = await addTargetWithError(address, method);
    if (!result) return res.send('create target failed ');
    res.send('target created ...');
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
async function deleteTarget(req, res) {

  try {
    const address = req.body.address;
    const method = req.body.method;
    const result = await removeTarget(address, method);
    if (result.count == 0) return res.send('target didnt find to delete !!!');
    res.send('target deleted ...');
  }
  catch (error) {
    res.status(400).send(error);
  }
}




module.exports = {
  createTarget,
  deleteTarget
};
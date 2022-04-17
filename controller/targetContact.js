const db = require('../db/targetContact');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function assignUserToTarget(req, res) {
  try {
    const username = req.body.username;
    const targetAddress = req.body.targetAddress;
    const result = await db.addUserToTarget(username, targetAddress);
    if (!result) return res.send('assign user to target failed !');
    res.send('assign user to target successfuly');
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
async function deleteUserToTarget(req, res) {
  try {
    const username = req.body.username;
    const targetAddress = req.body.targetAddress;
    const result = await db.removeUserToTarget(username, targetAddress);
    if (result.count > 0) {
      return res.send('delete user to target successfuly');
    }

    res.send('there  isnt any row with this information to delete !!!');


  }
  catch (error) {
    res.send(error);
  }
}




module.exports = {
  assignUserToTarget,
  deleteUserToTarget
};
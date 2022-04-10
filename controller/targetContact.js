const db = require('../db/targetContact');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function assignUserToTarget(req, res) {
  try {
    const username = req.body.username;
    const targetName = req.body.targetName;
    const result = await db.addUserToTarget(username, targetName);
    if (!result) return res.send('assign user to target failed !');
    res.send('assign user to target successfuly');
  }
  catch (error) {
    console.log(error);
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
    const targetName = req.body.targetName;
    const result = await db.removeUserToTarget(username, targetName);
    if (result.count > 0) {
      return res.send('delete user to target successfuly');
    }

    res.send('delete user to target failed !');


  }
  catch (error) {
    res.send(error);
  }
}




module.exports = {
  assignUserToTarget,
  deleteUserToTarget
};
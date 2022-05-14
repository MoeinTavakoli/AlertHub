const db = require('../db/userJob');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function assignUserToTarget(req, res) {
  try {
    const username = req.body.username;
    const targetAddress = req.body.targetAddress;
    const method = req.body.method;
    const result = await db.addUserToTarget(username, targetAddress, method);
    if (!result) return res.send('assign user to target failed !');
    res.send('assign user to target successfuly');
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({ code: error.code, message: 'duplicate username and teamName and method !!!' });
    if (error.code == 'P2003') return res.status(400).json({ code: error.code, message: 'username or teamName and method not found !!!' });
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
    const method = req.body.method;
    const result = await db.removeUserToTarget(username, targetAddress, method);
    if (result.count > 0) {
      return res.send('delete user to target successfuly');
    }

    res.status(400).send('there  isnt any row with this information to delete !!!');


  }
  catch (error) {
    res.send(error);
  }
}




module.exports = {
  assignUserToTarget,
  deleteUserToTarget
};
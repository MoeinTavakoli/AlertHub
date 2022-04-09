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
    console.log(`result : `);
    console.log(`result : `);
    console.log(`result : `);
    console.log(result);
    if (!result) return res.send('assign user to target failed !');
    res.send('assign user to target successfuly');
}
  catch (error) {
    res.send(error);
  }

}




module.exports = {
  assignUserToTarget
};
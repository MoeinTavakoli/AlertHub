const db = require('../db/team');


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createTeam(req, res) {
  try {
    const { teamName } = req.body;
    const result = await db.createTeam(teamName);
    if (!result) return res.send('add team failed !');
    return res.send('add team successfuly');
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
async function insertUserToTeam(req, res) {
  try {
    const { username, teamName } = req.body;
    const result = await db.insertUserToTeam(username, teamName);
    console.log(result);
    if (!result) return res.send('insert user to team failed !');
    return res.send('insert user to team successfuly');
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
async function removeUserFromTeam(req,res){
  try {
    const {username , teamName} = req.body;
    const result = await db.removeUserFromTeam(username, teamName);
    if (result.count == 0) return res.send('user didnt deleted !');
    return res.send('delete user from team successfuly');

  }
  catch (error) {
    res.status(400).send(error);
  }
}



module.exports = {
  createTeam,
  insertUserToTeam,
  removeUserFromTeam
};
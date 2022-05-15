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
    if (!result) return res.status(400).send('add team failed !');
    res.send('add team successfuly');
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({ code: error.code, message: 'duplicate team name !!!' });
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
    const { userID, teamName } = req.body;
    const result = await db.insertUserToTeam(userID, teamName);
    if (!result) return res.status(400).send('insert user to team failed !');
    return res.send('insert user to team successfuly');
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({success : false ,  code: error.code, message: 'this userID is already exist in this team !' });
    if (error.code == 'P2003') return res.status(400).json({success : false ,  code: error.code, message: 'user deleted or teamName not found !!!' });
    if (error.code == 'P404') return res.status(400).json({success : false ,  code: error.code, message : error.message });
    return res.status(400).json({success : false ,  error });
    
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function removeUserFromTeam(req, res) {
  try {
    const { userID, teamName } = req.body;
    const result = await db.removeUserFromTeam(userID, teamName);
    if (result.count == 0) return res.status(400).send('user didnt exist in this team !');
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
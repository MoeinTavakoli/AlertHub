const db = require('../db/teamJob');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createTeamJob(req, res) {
  try {
    const {  teamName, jobName } = req.body;
    const result = await db.createTeamJob(teamName , jobName);
    if (!result) return res.status(400).send('create teamJob failed !');
    return res.send('create relation teamName, jobName  successfuly ...');
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({success : false , code: error.code, message: 'duplicate teamName and jobName  !!!' });
    if (error.code == 'P2003') return res.status(400).json({success : false , code: error.code, message: 'jobName not found !!!' });
    res.status(400).json({success : false , message :error.message});
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function removeTeamJob(req, res) {
  try {
    const { teamName,jobName } = req.body;
    const result = await db.removeTeamJob(teamName , jobName);
    if (result.count == 0) return res.status(400).send('didnt find relation teamName and jobName to delete !');
    return res.send('teamJob  deleted successfuly ...');
  }
  catch (error) {
    res.status(400).send(error);
  }
}



module.exports = {
  createTeamJob , 
  removeTeamJob
};
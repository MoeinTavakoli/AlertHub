const db = require('../db/teamTarget');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createTeamTarget(req, res) {
  try {
    const { targetAddress, teamName, method } = req.body;
    const result = await db.createTeamTarget(targetAddress, teamName, method);
    if (!result) return res.status(400).send('create teamTarget failed !');
    return res.send('create teamTarget successfuly ...');
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
async function removeTeamTarget(req, res) {
  try {
    const { targetAddress, teamName, method } = req.body;
    const result = await db.removeTeamFromTarget(targetAddress, teamName, method);
    if (result.count == 0) return res.status(400).send('didnt teamTarget deleted !');
    return res.send(' teamTarget  deleted successfuly ...');
  }
  catch (error) {
    res.send(400).send(error);
  }
}



module.exports = {
  createTeamTarget,
  removeTeamTarget
};
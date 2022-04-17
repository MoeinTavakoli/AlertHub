/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function createTeamTarget(req, res, next) {
  if (!req.body.teamName || !req.body.targetAddress) {
    return res.status(400).send('targetAddress and teamName must be inserted !');
  }
  next();
}


module.exports = createTeamTarget;
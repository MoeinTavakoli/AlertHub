
/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function removeTeamTarget(req, res, next) {
  if (!req.body.teamName || !req.body.jobName) return res.status(400).send('jobName and teamName must be inserted !');
  next();
}


module.exports = removeTeamTarget;
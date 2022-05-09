const methods = ['ping', 'http_request'];

/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function removeTeamTarget(req, res, next) {
  if (!req.body.teamName || !req.body.targetAddress) return res.status(400).send('targetAddress and teamName must be inserted !');
  if (!methods.includes(req.body.method)) return res.status(400).send('invalid method ( choose ping OR http_request ) ');
  next();
}


module.exports = removeTeamTarget;
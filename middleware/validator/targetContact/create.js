const methods = ['ping', 'http_request'];
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addUserToTarget(req, res, next) {
  if (!req.body.targetAddress || !req.body.username) res.status(400).send('targetAddress and username and  must be inserted !!!');
  if (!methods.includes(req.body.method)) return res.status(400).send('invalid method ( choose ping OR http_request ) ');

  next();
}

module.exports = addUserToTarget;
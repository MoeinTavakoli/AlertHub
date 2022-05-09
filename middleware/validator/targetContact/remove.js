const methods = ['ping', 'http_request'];
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function removeUserFromTarget(req, res, next) {
  if (!req.body.targetAddress || !req.body.username) return res.status(400).send('targetAddress and username must be inserted !!!');
  if (!methods.includes(req.body.method)) return res.status(400).send('invalid method ( choose ping OR http_request ) ');

  next();
}


module.exports = removeUserFromTarget;
const methods = ['ping', 'http_request'];
/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function createTarget(req, res, next) {
  if (!req.body.address) return res.status(400).send('address must be entered');
  if (!methods.includes(req.body.method)) return res.status(400).send('invalid method ( choose ping OR http_request ) ');
  next();
}


module.exports = createTarget;  
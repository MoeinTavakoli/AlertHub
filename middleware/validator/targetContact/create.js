/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addUserToTarget(req, res, next) {
  if (!req.body.targetAddress || !req.body.username) {
    return res.status(400).send('targetAddress and username must be inserted !!!');
  }
  next();
}

module.exports = addUserToTarget;
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addUserToTarget(req, res, next) {
  if (!req.body.jobName || !req.body.userID) res.status(400).send('userID and jobName must be inserted !!!');
  next();
}

module.exports = addUserToTarget;
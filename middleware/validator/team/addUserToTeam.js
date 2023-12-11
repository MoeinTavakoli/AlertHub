/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function addUserToTeamValidator(req, res, next) {
  if (!req.body.userID || !req.body.teamName) return res.status(400).send('teamName and userID must be inserted !!');
  next();
}


module.exports = addUserToTeamValidator;
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
function removeUserToTeamValidator(req, res, next) {
  if (!req.body.username || !req.body.teamName) {
    return res.status(400).send('teamName and username must be inserted !!');
  }
  next();
}


module.exports = removeUserToTeamValidator;
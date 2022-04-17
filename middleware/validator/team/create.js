/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function createTeam(req,res,next) {
  if (!req.body.teamName) {
    res.send('teamName must be inserted !!');
  }
  next();
}


module.exports = createTeam;
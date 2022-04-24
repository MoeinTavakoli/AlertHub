/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
function deleteUserValidator(req, res, next) {
  if (!req.body.newUsername) return res.status(400).send('please insert newUsername in body ');
  next();
}

module.exports = deleteUserValidator;
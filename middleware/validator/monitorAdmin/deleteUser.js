/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
function deleteUserValidator(req, res, next) {
  if (!req.params.username) return res.status(400).send('please inseet username in url ');
  next();
}

module.exports = deleteUserValidator;
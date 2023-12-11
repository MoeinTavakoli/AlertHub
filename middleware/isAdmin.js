/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
async function IsAdmin(req, res, next) {
    if (req.info.role == 'CONTACT') {
        res.status(401).send('permission denied !');
    }
    next();

}


module.exports = IsAdmin;

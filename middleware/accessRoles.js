/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
function defineAccessRoles(req,res,next) {
  const role = req.info.role;
  switch(role) {
    case 'MONITORING_ADMIN':
      req.accessRoles = ['CONTACT' , 'MONITORING_ADMIN'];
      break;
    case 'MONIA_ADMIN':
      req.accessRoles = ['CONTACT' , 'MONITORING_ADMIN', 'MONIA_ADMIN'];
      break;
    case 'ROOT':
      req.accessRoles = ['CONTACT' , 'MONITORING_ADMIN', 'MONIA_ADMIN' , 'ROOT'];
      break;    
    default: 
      return res.status(401).send('permission denied ... ');
  }    
  next();
}


module.exports = defineAccessRoles;
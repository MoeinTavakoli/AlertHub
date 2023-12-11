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
    case 'SERVICE_ADMIN':
      req.accessRoles = ['CONTACT' , 'MONITORING_ADMIN', 'SERVICE_ADMIN'];
      break;
    case 'ROOT':
      req.accessRoles = ['CONTACT' , 'MONITORING_ADMIN', 'SERVICE_ADMIN' , 'ROOT'];
      break;    
    default: 
      return res.status(401).send('permission denied ... ');
  }    
  next();
}


module.exports = defineAccessRoles;
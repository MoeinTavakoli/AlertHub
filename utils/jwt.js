const JWT = require('jsonwebtoken');
const config = require('../config');


/**
 * 
 * @param {Object} payload - as user information 
 * @returns token
 */
function generateToken(payload) {
  return JWT.sign(payload, config.JWT.secretKey);
}

/**
 * 
 * @param {String} token
 * @returns {false | Object}  
 */
function verifyToken(token) {
  return JWT.verify(token, config.JWT.secretKey);
}


module.exports = {
  generateToken,
  verifyToken
};
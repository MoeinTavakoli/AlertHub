const { hash, genSalt, compare } = require('bcrypt');


/**
 * 
 * @param {String} arg - that you want to hash it 
 * @returns 
 */
async function hashPassword(arg) {
  const salt = await genSalt(3);
  return await hash(arg, salt);
}


/**
 * 
 * @param {String} nonHashed - string that it didnt hashed 
 * @param {String} hashed - hashed password that you want to be compair it
 * @returns 
 */
async function compairPassword(nonHashed, hashed) {
  return await compare(nonHashed, hashed);
}


module.exports = {
  hashPassword , compairPassword
};
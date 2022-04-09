const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function addUserToTarget(username, targetName) {
  try {
    return await prisma.targetContacts.create({
      data: {
        username, targetName
      }
    });
  }
  catch (error) {
    return error;
  }
}




module.exports = {
  addUserToTarget
};
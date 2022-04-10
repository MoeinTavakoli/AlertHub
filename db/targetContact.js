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

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function removeUserToTarget(targetID) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targetContacts.delete({
      where: {
        id: targetID
      }
    });
  }
  catch (error) {
    throw error;
  }
}






module.exports = {
  addUserToTarget,
  removeUserToTarget
};
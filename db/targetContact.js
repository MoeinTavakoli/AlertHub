
const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function addUserToTarget(username, targetAddress) {
  try {
    return await prisma.targetContacts.create({
      data: {
        username,
        targetAddress
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
async function removeUserToTarget(username, targetAddress) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targetContacts.deleteMany({
      where: {
        username,
        targetAddress
      }
    });
  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {*} targetName 
 * @returns 
 */
async function getContact(targetAddress) {
  // eslint-disable-next-line no-useless-catch
  try {
    const users = await prisma.targetContacts.findMany({
      where: {
        targetAddress
      },
      include: {
        userContact: true,
      },

    });
    const phones = users.map(item => {
      return item.userContact.phoneNumber;
    });
    return phones;
  }
  catch (error) {
    throw error;
  }
}


module.exports = {
  addUserToTarget,
  removeUserToTarget,
  getContact
};
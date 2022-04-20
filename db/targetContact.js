
const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function addUserToTarget(username, targetAddress , method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targetContacts.create({
      data: {
        username,
        targetAddress,
        method
      }
    });
  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function removeUserToTarget(username, targetAddress, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targetContacts.deleteMany({
      where: {
        username,
        targetAddress,
        method
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
async function getPhoneNumberContacts(targetAddress) {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await prisma.targetContacts.findMany({
      where: {
        targetAddress
      },
      select: {
        userContact: {
          select: {
            phoneNumber: true
          }
        }
      }
    });

    const phoneNumbers = result.length > 0 ? result.map(x => x.userContact.phoneNumber) : [];
    return phoneNumbers;
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  addUserToTarget,
  removeUserToTarget,
  getPhoneNumberContacts
};
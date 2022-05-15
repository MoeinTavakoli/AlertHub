const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} targetName 
 * @returns 
 */
async function assignUserToJob(userID , jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.userJob.create({
      data: {
        jobName,
        userID
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
async function revokeUserFromJob(userID , jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.userJob.deleteMany({
      where: {
        userID , 
        jobName
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
async function getPhoneNumberContacts(jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await prisma.userJob.findMany({
      where: {
        jobName
      },
      include : {
        usersRel :{
          select : {
            phoneNumber: true
          }
        }
      },
  
    });
    const phoneNumbers = result.length > 0 ? result.map(x => {
      return x.userContact.phoneNumber;
    }) : [];
    return phoneNumbers;
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  assignUserToJob,
  revokeUserFromJob,
  getPhoneNumberContacts
};
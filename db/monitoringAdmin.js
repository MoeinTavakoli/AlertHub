const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 * @returns 
 */
async function createMonitoringAdmin(username, password, phoneNumber) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.create({
      data: {
        username,
        password,
        phoneNumber,
        role: 'MONITORING_ADMIN',
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
 * @returns 
 */
async function deleteMonitoringAdmin(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false,
        role: {
          in: ['CONTACT', 'MONITORING_ADMIN']
        }
      },
      data: {
        isDeleted: true
      }
    });
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  createMonitoringAdmin,
  deleteMonitoringAdmin
};
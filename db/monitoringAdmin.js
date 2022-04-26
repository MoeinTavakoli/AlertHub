const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 * @returns 
 */
async function createMonitoringAdmin(username, password, phoneNumber, role) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.create({
      data: {
        username,
        password,
        phoneNumber,
        role
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


/**
 * 
 * @param {String} oldUsername 
 * @param {String} newUsername 
 * @returns 
 */
async function changeUsername(oldUsername, newUsername) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username: oldUsername,
        isDeleted: false,
        role: {
          in: ['CONTACT', 'MONITORING_ADMIN']
        }
      },
      data: {
        username: newUsername
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
 * @param {String} password 
 */
async function updatePassword(username, password) {
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
        password
      }
    });
  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {*} username 
 * @param {*} phoneNumber 
 * @returns 
 */
async function updatePhoneNumber(username, phoneNumber) {
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
        phoneNumber
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
 * @param {String} password 
 * @returns 
 */
async function login(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findUnique({
      where: {
        username
      }
    });
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  createMonitoringAdmin,
  deleteMonitoringAdmin,
  changeUsername,
  updatePassword,
  updatePhoneNumber,
  login
};
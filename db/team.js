const prisma = require('../loader/prisma');


/**
 * 
 * @param {String} teamName 
 * @returns 
 */
async function createTeam(teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teams.create({
      data: {
        teamName
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
 * @param {String} teamName 
 * @returns 
 */
async function insertUserToTeam(userID, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamUsers.create({
      data: {
        userID,
        teamName
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
 * @param {String} teamName 
 * @returns 
 */
async function removeUserFromTeam(userID, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamUsers.deleteMany({
      where: {
        userID,
        teamName
      }
    });
  }
  catch (error) {
    throw error;
  }
}



/**
 * 
 * @param {String} teamName 
 */
async function getAllPhoneNumberUserByTeam(teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamUsers.findMany({
      where: {
        teamName
      },
      select: {
        user: {
          select: {
            phoneNumber: true
          }
        }
      }
    });
  }
  catch (error) {
    throw error;
  }

}








module.exports = {
  createTeam,
  insertUserToTeam,
  removeUserFromTeam,
  getAllPhoneNumberUserByTeam
};
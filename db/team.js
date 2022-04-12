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
async function insertUserToTeam(username, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamUsers.create({
      data: {
        username,
        teamName
      }
    });
  }
  catch (error) {
    console.log(error);
    throw error;
  }

}


/**
 * 
 * @param {String} username 
 * @param {String} teamName 
 * @returns 
 */
async function removeUserFromTeam(username, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamUsers.deleteMany({
      where: {
        username,
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
const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} targetAddress 
 * @param {String} teamName 
 */
async function createTeamTarget(targetAddress, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamTarget.create({
      data: {
        targetAddress,
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
 * @param {String} targetAddress 
 * @param {*} teamName 
 * @returns 
 */
async function removeTeamFromTarget(targetAddress, teamName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamTarget.deleteMany({
      where: {
        targetAddress,
        teamName
      }
    });
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  createTeamTarget,
  removeTeamFromTarget
};
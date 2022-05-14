const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} targetAddress 
 * @param {String} teamName 
 */
async function createTeamTarget(targetAddress, teamName, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamTarget.create({
      data: {
        targetAddress,
        teamName,
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
 * @param {String} targetAddress 
 * @param {*} teamName 
 * @returns 
 */
async function removeTeamFromTarget(targetAddress, teamName, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamTarget.deleteMany({
      where: {
        targetAddress,
        teamName,
        method
      }
    });
  }
  catch (error) {
    throw error;
  }
}


/**
 * @param {String} teamName
 */
async function getAllPhoneNumberUserByTeam(jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await prisma.teamJobs.findMany({
      where: {
        jobName
      },
      select: {
        team: {
          select: {
            teamUsers: {
              select: {
                user: {
                  select: {
                    phoneNumber: true
                  }
                }
              }
            }
          }
        }
      }
    });

    const phoneNumbers = result[0] !== undefined && result[0].team.teamUsers.length > 0 ? result[0].team.teamUsers.map(x => {
      return x.user.phoneNumber;
    }) : [];
    return phoneNumbers;

  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  createTeamTarget,
  removeTeamFromTarget,
  getAllPhoneNumberUserByTeam
};
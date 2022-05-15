const prisma = require('../loader/prisma');

/**
 * 
 * @param {String} targetAddress 
 * @param {String} teamName 
 */
async function createTeamJob( teamName , jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamJobs.create({
      data: {
        jobName,
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
async function removeTeamJob(teamName , jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.teamJobs.deleteMany({
      where: {
        teamName , 
        jobName
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
  createTeamJob,
  removeTeamJob,
  getAllPhoneNumberUserByTeam
};
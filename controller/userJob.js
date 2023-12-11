const db = require('../db/userJob');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function assignUserToJob(req, res) {
  try {
    const {userID , jobName} = req.body;
    const result = await db.assignUserToJob(userID , jobName);
    if (!result) return res.json({succes : false , message :'assign user to target failed !'});
    res.json({success:true , message : 'assign user to target successfuly'});
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({success : false, code: error.code, message: 'user with this jobName is already have realation !!!' });
    if (error.code == 'P2003') return res.status(400).json({success : false, code: error.code, message: 'userID not found !!!' });
    res.status(400).json({success : false ,error : error.message || error});
  }
}




/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function revokeUserFromTarget(req, res) {
  try {
    const {userID , jobName} = req.body;
    const result = await db.revokeUserFromJob(userID , jobName);
    if (result.count !== 0) {
      return res.json({succes : true , message : 'revoke user to target successfuly'});
    }
    res.status(400).json({success : false , message: 'didnt have realtion userID , jobName to delete !!!'});

  }
  catch (error) {
    res.send(error);
  }
}




module.exports = {
  assignUserToJob,
  revokeUserFromTarget
};
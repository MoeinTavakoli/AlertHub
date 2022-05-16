const { generateToken } = require('../utils/jwt');
const db = require('../db/user');
const { compairPassword, hashPassword } = require('../utils/bcrypt');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
async function login(req, res) {
  // eslint-disable-next-line no-useless-catch
  try {
    const { username, password } = req.body;
    const payload = await db.login(username);
    if (!payload) return res.status(401).json({success : false , message :'username or password is not correct !!!'});
    const isCorrectUser = await compairPassword(password.trim(), payload.password);
    if (!isCorrectUser) return res.status(401).json({success : false , message :'username or password is not correct !!!'});
    res.json({success : true , time : new Date(),
      token : generateToken({ username: payload.username, role: payload.role , userID : payload.userID })});
  }
  catch (error) {
    res.status(500).json({success : false , error});
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function createUser(req, res) {
  try {
    const { username, password, phoneNumber, role } = req.body;
    const hashedPassword = await hashPassword(password.trim());
    const result = await db.createUser(username, hashedPassword, phoneNumber, role);
    if (!result) return res.status(400).json({success : false ,  message : 'cant create user'});
    res.json({success : true ,  message : 'user created ...'});
  }
  catch (error) {
    if (error.code == 'P2002') return res.status(400).json({success : false ,  code: error.code, message: 'username already exsits !' });

    res.status(400).json({success : false ,  error});
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function deleteUser(req, res) {
  try {
    const userID = req.params.userID;
    const result = await db.deleteUser(userID);
    if (result.count == 0) return res.status(400).send('user not found !');
    res.send('user deleted ...');
  }
  catch (error) {
    res.status(400).json({success : false  , error});
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updatePhoneNumber(req, res) {
  try {
    const {userID} = req.params;
    const {phoneNumber} = req.body;
    const result = await db.updatePhoneNumber(userID, phoneNumber);
    if (result.count == 0) return res.status(400).json({success : false  , message : 'user not found !!!'});
    res.json({success : true , message : 'phone number updated ...'});
  }
  catch (error) {
    res.status(400).json({success : false , error});
  }
}



/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updatePassword(req, res) {
  try {
    const userID = req.params.userID;
    const password = req.body.password;
    const hashedPassword = await hashPassword(password.trim());
    const result = await db.updatePassword(userID, hashedPassword);
    if (result.count == 0) return res.status(400).json({success : false , message : 'user not found to change password !!!'});
    res.json({success : true , message : 'password updated ...'});
  }
  catch (error) {
    res.status(400).json({success : false , error });
  }
}




/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function updateUsername(req, res) {
  try {
    const {userID} = req.params;
    const {newUsername} = req.body;
    const result = await db.updateUsername(userID, newUsername);
    if (result.count == 0) return res.status(400).json({success : false , message: 'user not found !!!' });
    res.json({success : true , message  : 'username updated ...'});
  }
  catch (err) {
    res.status(400).json({success : false , error : err});
  }
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllUsers(req,res) {
  try {
    const accessRoles = req.accessRoles;
    const users = await db.getAllUsers(accessRoles);
    res.json({success : true ,accessRoles ,  users  });
  }
  catch (error) {
    res.status(400).json({success : false , error});
  }
}

module.exports = {
  login,
  createUser,
  deleteUser,
  updatePhoneNumber,
  updatePassword,
  updateUsername,
  getAllUsers
};
// dal/userDAL.js
const User = require('../models/user');

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const createUser = async (userData) => {
  return await User.create(userData);
};

module.exports = { getUserById, createUser };

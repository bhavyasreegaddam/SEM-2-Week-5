// services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserById } = require('../dal/userDal');

const signUp = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await createUser({ ...userData, password: hashedPassword });
  return user;
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
};

module.exports = { signUp, login };

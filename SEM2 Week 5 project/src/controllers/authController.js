// controllers/authController.js
const { signUp, login } = require('../services/authService');

const signUpHandler = async (req, res) => {
  try {
    const user = await signUp(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginHandler = async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { signUpHandler, loginHandler };

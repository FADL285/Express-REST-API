const express = require('express');
const router = express.Router();
const { loginValidatorMW } = require('../middlewares/user-validator');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');

router.post('/', loginValidatorMW, async (req, res) => {
  const INVALID_MESSAGE = 'Wrong email or password';
  // Check that email exists.
  const user = await User.findOne({ email: req.body.email }).exec();
  if (!user) return res.status(403).json({ message: INVALID_MESSAGE });
  // Check if password is correct.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(403).json({ message: INVALID_MESSAGE });
  // Send the response if all pass.
  const token = user.genAuthToken();
  console.log(token);
  res.header('X-Auth-Token', token);
  res.json({ status: 200, message: 'logged-in successfully' });
});

module.exports = router;

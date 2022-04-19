const express = require('express');
const router = express.Router();
const {
  loginValidatorMW,
  registerValidatorMW
} = require('../middlewares/user-validator');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');

router.post('/', loginValidatorMW, async (req, res) => {
  try {
    // Check if the user is already registered
    const exists = await User.findOne({ email: req.body.email }).exec();
    if (exists) {
      return res.json({ message: 'This email already registered' });
    }
    // create a new user account
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.json({
      status: 200,
      message: 'user registered successfully',
      data: { name: user.name, email: user.email }
    });
  } catch (error) {
    for (const err in error.errors) {
      console.log(err);
    }
  }
});

module.exports = router;

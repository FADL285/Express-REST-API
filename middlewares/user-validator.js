const {
  loginValidator,
  registerValidator
} = require('../utilities/user-validator');

const loginValidatorMW = (req, res, next) => {
  const valid = loginValidator(req.body);
  if (valid) {
    req.valid = true;
    next();
  } else {
    console.log(loginValidator.errors);
    res.status(400).json({
      status: 400,
      message: 'name, email and password are required and be valid'
    });
  }
};

const registerValidatorMW = (req, res, next) => {
  const valid = registerValidator(req.body);
  if (valid) {
    req.valid = true;
    next();
  } else {
    res.status(400).json({
      status: 400,
      message: 'email and password are required and be valid'
    });
  }
};

module.exports = {
  loginValidatorMW,
  registerValidatorMW
};

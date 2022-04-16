const {
  createValidator,
  updateValidator
} = require('../utilities/student-validator');

const createValidatorMW = (req, res, next) => {
  const valid = createValidator(req.body);
  if (valid) {
    req.valid = true;
    next();
  } else {
    console.log(createValidator.errors);
    res.status(400).json({
      status: 400,
      message: 'firstName, lastName and dept are required and be valid'
    });
  }
};

const updateValidatorMW = (req, res, next) => {
  const valid = updateValidator(req.body);
  if (valid) {
    req.valid = true;
    next();
  } else {
    res.status(400).json({
      status: 400,
      message: 'id is required and be valid'
    });
  }
};

module.exports = {
  createValidatorMW,
  updateValidatorMW
};

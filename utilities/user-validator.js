const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv, ['email']);

// ajv schema validator
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      pattern: '^[a-zA-Z]{3,}$'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 6
    }
  }
  // required: ['name', 'email', 'password']
};
const registerValidator = ajv.compile({
  ...schema,
  required: ['name', 'email', 'password']
});
const loginValidator = ajv.compile({
  ...schema,
  required: ['email', 'password']
});
module.exports = {
  registerValidator,
  loginValidator
};

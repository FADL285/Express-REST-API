const Ajv = require('ajv');

const ajv = new Ajv();

// ajv schema validator
const schema = {
  type: 'object',
  properties: {
    first_name: {
      type: 'string',
      pattern: '^[a-zA-Z]{3,}$'
    },
    last_name: {
      type: 'string',
      pattern: '^[a-zA-Z]{3,}$'
    },
    dept: {
      type: 'string',
      enum: ['IT', 'CS', 'IS', 'BIO', 'AI']
    }
  }
  // required: ['first_name', 'last_name', 'dept']
  // minProperties: 1,
  // maxProperties: 3
};
const createValidator = ajv.compile({
  ...schema,
  required: ['first_name', 'last_name', 'dept']
});
const updateValidator = ajv.compile({ ...schema });

module.exports = {
  createValidator,
  updateValidator
};

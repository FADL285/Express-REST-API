const Ajv = require('ajv');

const ajv = new Ajv();

// ajv schema validator
const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      pattern: '^[a-zA-Z]{3,}$'
    },
    lastName: {
      type: 'string',
      pattern: '^[a-zA-Z]{3,}$'
    },
    dept: {
      type: 'string',
      enum: ['it', 'cs', 'is', 'bio', 'ai', 'general']
    }
  }
  // required: ['firstName', 'lastName', 'dept']
  // minProperties: 1,
  // maxProperties: 3
};
const createValidator = ajv.compile({
  ...schema,
  required: ['firstName', 'lastName', 'dept']
});
const updateValidator = ajv.compile({ ...schema });

module.exports = {
  createValidator,
  updateValidator
};

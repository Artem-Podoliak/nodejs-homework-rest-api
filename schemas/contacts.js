const Joi = require("joi");
const addSchema = Joi.object({
  name: Joi.string().allow(null),
  email: Joi.string().allow(null),
  phone: Joi.string().allow(null),
}).or("name", "email", "phone");

module.exports = { addSchema };

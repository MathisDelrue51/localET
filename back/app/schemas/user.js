const Joi = require('joi');

const userSchema = Joi.object({
  //TLDS {allow: false} allwos all domains(.com, .net .io, etc...)
  email: Joi.string().email({
    tlds: {
      allow: false
    }
  }).required().messages({
    'string.base': `"email" should be a type of 'text'`,
    'string.empty': `"email" cannot be an empty field`,
    'any.required': `"email" is a required field`
  }),
  // Pseudo can contain letters or numbers, can be 3 to 30 caracters long
  pseudo: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.base': `"pseudo" should be a type of 'text'`,
    'string.empty': `"pseudo" cannot be an empty field`,
    'string.alphanum': `"pseudo" can only have alphanum characters (0-9 & a-Z)`,
    'string.min': `"pseudo" cannot be less than 3 characters`,
    'string.max': `"pseudo" cannot be more than 30 characters`,
    'any.required': `"pseudo" is a required field`
  }),
  //password must contain 8 to 30 caracters
  //   "      "      "    a minimum of 1 lower case letter
  //   "      "      "    a minimum of 1 upper case letter 
  //   "      "      "    a minimum of 1 numeric character
  //   "      "      "    a minimum of 1 special chracter 
  password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/)).required().messages({
    'string.base': `"password" should be a type of 'text'`,
    'string.empty': `"password" cannot be an empty field`,
    'string.pattern.base': `"password" must have 1 lower case letter, 1 upper case letter, 1 numeric character, 1 special chracter`,
    'any.required': `"password" is a required field`
  })


});

module.exports = userSchema;
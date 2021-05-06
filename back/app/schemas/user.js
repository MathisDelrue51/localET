const Joi = require('joi');

const userSchema = Joi.object({

  email: Joi.string().email({ tlds: {allow: false} }).required(), //TLDS {allow: false} allwos all domains(.com, .net .io, etc...)
  pseudo: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/)).required()

});

module.exports = userSchema;
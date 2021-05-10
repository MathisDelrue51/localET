const Joi = require('joi');

const userSchema = Joi.object({

  email: Joi.string().email({ tlds: {allow: false} }).required(), 
  //TLDS {allow: false} allwos all domains(.com, .net .io, etc...)
  pseudo: Joi.string().alphanum().min(3).max(30).required(),
  // Pseudo can contain letters or numbers, can be 3 to 30 caracters long
  password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/)).required()
  //password must contain 8 to 30 caracters
  //   "      "      "    a minimum of 1 lower case letter
  //   "      "      "    a minimum of 1 upper case letter 
  //   "      "      "    a minimum of 1 numeric character
  //   "      "      "    a minimum of 1 special chracter 

});

module.exports = userSchema;
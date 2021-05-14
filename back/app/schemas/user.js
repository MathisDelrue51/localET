const Joi = require('joi');

const userSchema = Joi.object({
  //TLDS {allow: false} allwos all domains(.com, .net .io, etc...)
  email: Joi.string().email({
    tlds: {
      allow: false
    }
  }).required().messages({
    'string.base': `le champ email doit être de type texte`,
    'string.email': `le champ email doit avoir un format d'email`,
    'string.empty': `Le champ email ne peut pas être vide`,
    'any.required': `Le champ email est requis`
  }),
  // Pseudo can contain letters or numbers, can be 3 to 30 caracters long
  pseudo: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.base': `le champ pseudo doit être de type texte`,
    'string.empty': `Le champ pseudo ne peut pas être vide`,
    'string.alphanum': `Le pseudo ne peut être composé que de caractères alphanumériques (0-9 & a-Z)`,
    'string.min': `Le pseudo doit contenir minimum 3 caractères`,
    'string.max': `Le pseudo doit contenir maximum 30 caractères`,
    'any.required': `Le champ pseudo est requis`
  }),
  //password must contain 8 to 30 caracters
  //   "      "      "    a minimum of 1 lower case letter
  //   "      "      "    a minimum of 1 upper case letter 
  //   "      "      "    a minimum of 1 numeric character
  //   "      "      "    a minimum of 1 special chracter 
  password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/)).required().messages({
    'string.base': `le champ mot de passe doit être de type texte`,
    'string.empty': `Le champ mot de passe ne peut pas être vide`,
    'string.pattern.base': `Le mot de passe doit avoir entre 8 et 30 caractères et contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial`,
    'any.required': `Le champ mot de passe est requis`
  })


});

module.exports = userSchema;
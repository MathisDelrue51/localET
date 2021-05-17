const Joi = require('joi');

const schema = Joi.object({

  id: Joi.number().integer().allow(null).positive().messages({
    'number.base': `le champ id doit être de type nombre`,
    'number.positive': `le champ id doit être un nombre positif`,
    'number.integer': `le champ id doit être un nombre entier`
  }),

  title: Joi.string().min(5).required().messages({
    'string.base': `le champ titre doit être de type texte`,
    'string.min': `Le titre doit contenir minimum 5 caractères`,
    'any.required': `Le champ titre est requis`
  }),
  description: Joi.string().min(20).required().messages({
    'string.base': `le champ description doit être de type texte`,
    'string.min': `Le description doit contenir minimum 20 caractères`,
    'any.required': `Le champ description est requis`
  }),
  address: Joi.string().min(3).required().messages({
    'string.base': `le champ addresse doit être de type texte`,
    'string.min': `L'addresse doit contenir minimum 3 caractères`,
    'any.required': `Le champ addresse est requis`
  }),
  latitude: Joi.number().required().messages({
    'number.base': `le champ latitude doit être de type nombre`,
    'any.required': `Le champ latitude est requis`
  }),
  longitude: Joi.number().required().messages({
    'number.base': `le champ longitude doit être de type nombre`,
    'any.required': `Le champ longitude est requis`
  }),
  website: Joi.string().min(5).allow(null).messages({
    'string.base': `le champ siteweb doit être de type texte`,
    'string.min': `Le siteweb doit contenir minimum 5 caractères`
  }),
  agenda: Joi.string().min(3).required().messages({
    'string.base': `le champ agenda doit être de type texte`,
    'string.min': `L'agenda doit contenir minimum 3 caractères`,
    'any.required': `Le champ agenda est requis`
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': `le champ prix doit être de type nombre`,
    'number.min': `Le prix doit être un nombre supérieur ou égale à 0 (gratuit)`,
    'any.required': `Le champ prix est requis`
  }),
  user_id: Joi.number().integer().positive().required().messages({
    'number.base': `le champ user_id doit être de type nombre`,
    'number.positive': `user_id doit être un nombre positif`,
    'number.integer': `user_id doit être un nombre entier`,
    'any.required': `Le champ user_id est requis`
  }),
  category_id: Joi.number().integer().positive().required().messages({
    'number.base': `le champ category_id doit être de type nombre`,
    'number.positive': `Choisir une catégorie parmis celles proposées`,
    'number.integer': `category_id doit être un nombre entier`,
    'any.required': `Le champ category_id est requis`
  })
});

module.exports = schema;

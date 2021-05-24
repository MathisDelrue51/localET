const Joi = require('joi');

const schema = Joi.object({

  id: Joi.number().integer().positive().messages({
    'number.base': `Le champ id doit être de type nombre`,
    'number.positive': `Le champ id doit être un nombre positif`,
    'number.integer': `Le champ id doit être un nombre entier`
  }),

  title: Joi.string().min(5).max(30).required().messages({
    'string.base': `Le champ titre doit être de type texte`,
    'string.min': `Le titre doit contenir minimum 5 caractères`,
    'string.max': `Le titre doit contenir maximum 30 caractères`,
    'string.empty': `Le champ titre est requis`
  }),
  description: Joi.string().min(10).required().messages({
    'string.base': `Le champ description doit être de type texte`,
    'string.min': `Le description doit contenir minimum 10 caractères`,
    'string.empty': `Le champ description est requis`
  }),
  address: Joi.string().min(3).required().messages({
    'string.base': `Le champ addresse doit être de type texte`,
    'string.min': `L'addresse doit contenir minimum 3 caractères`,
    'string.empty': `Le champ addresse est requis`
  }),
  latitude: Joi.number().required().messages({
    'number.base': `Le champ latitude doit être de type nombre`,
    'string.empty': `Le champ latitude est requis`
  }),
  longitude: Joi.number().required().messages({
    'number.base': `Le champ longitude doit être de type nombre`,
    'string.empty': `Le champ longitude est requis`
  }),
  website: Joi.string().min(5).allow(null, '').messages({
    'string.base': `Le champ siteweb doit être de type texte`,
    'string.min': `Le siteweb doit contenir minimum 5 caractères`
  }),
  agenda: Joi.string().min(3).required().messages({
    'string.base': `Le champ Date et Heure doit être de type texte`,
    'string.min': `Le champ Date et Heure doit contenir minimum 3 caractères`,
    'string.empty': `Le champ Date et Heure est requis`
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': `Le champ prix est requis, ce doit être un nombre, 0 étant gratuit`,
    'number.min': `Le prix doit être un nombre supérieur ou égal à 0 (gratuit)`,
    'string.empty': `Le champ prix est requis`
  }),
  user_id: Joi.number().integer().positive().required().messages({
    'number.base': `Le champ user_id doit être de type nombre`,
    'number.positive': `user_id doit être un nombre positif`,
    'number.integer': `user_id doit être un nombre entier`,
    'string.empty': `Le champ user_id est requis`
  }),
  category_id: Joi.number().integer().positive().required().messages({
    'number.base': `Choisir une catégorie parmis celles proposées`,
    'number.positive': `Le champ category_id doit être de type nombre`,
    'number.integer': `category_id doit être un nombre entier`,
    'string.empty': `Le champ category_id est requis`
  })
});

module.exports = schema;

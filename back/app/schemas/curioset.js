const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().min(5).required(),
    description: Joi.string().min(20).required(),
    address: Joi.string().min(20).required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    website: Joi.string().min(20).allow(null),
    agenda: Joi.string().min(6).required(),
    price: Joi.number().positive().required(),
    user_id: Joi.number().integer().positive().required(),
    category_id: Joi.number().integer().positive().required()
});

module.exports = schema;

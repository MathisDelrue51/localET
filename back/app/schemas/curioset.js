const Joi = require('joi');

const schema = Joi.object({

    id: Joi.number().integer().required().positive().messages({
      'number.base': `"id" should be a type of 'number'`,
      'number.positive': `"id" should be a positive number`,
      'number.integer': `"id" should be an integer`,
      'any.required': `"id" is a required field`
    }),

    title: Joi.string().min(5).required().messages({
        'string.base': `"title" should be a type of 'text'`,
        'string.min': `"title" cannot be less than 5 characters`,
        'any.required': `"title" is a required field`
      }),
    description: Joi.string().min(20).required().messages({
        'string.base': `"description" should be a type of 'text'`,
        'string.min': `"description" cannot be less than 20 characters`,
        'any.required': `"description" is a required field`
      }),
    address: Joi.string().min(20).required().messages({
        'string.base': `"address" should be a type of 'text'`,
        'string.min': `"address" cannot be less than 20 characters`,
        'any.required': `"address" is a required field`
      }),
    latitude: Joi.number().required().messages({
        'number.base': `"latitude" should be a type of 'number'`,
        'any.required': `"latitude" is a required field`
      }),
    longitude: Joi.number().required().messages({
        'number.base': `"longitude" should be a type of 'number'`,
        'any.required': `"longitude" is a required field`
      }),
    website: Joi.string().min(20).allow(null).messages({
        'string.base': `"website" should be a type of 'text'`,        
        'string.min': `"website" cannot be less than 20 characters`        
      }),
    agenda: Joi.string().min(6).required().messages({
        'string.base': `"agenda" should be a type of 'text'`,
        'string.min': `"agenda" cannot be less than 6 characters`,
        'any.required': `"agenda" is a required field`
      }),
    price: Joi.number().min(0).required().messages({
        'number.base': `"price" should be a type of 'number'`,
        'number.min': `"price" should be a positive number or 0 (free)`,
        'any.required': `"price" is a required field`
      }),
    user_id: Joi.number().integer().positive().required().messages({
        'number.base': `"user_id" should be a type of 'number'`,
        'number.positive': `"user_id" should be a positive number`,
        'number.integer': `"user_id" should be an integer`,
        'any.required': `"user_id" is a required field`
      }),
    category_id: Joi.number().integer().positive().required().messages({
        'number.base': `"category_id" should be a type of 'number'`,
        'number.positive': `"category_id" should be a positive number`,
        'number.integer': `"category_id" should be an integer`,
        'any.required': `"category_id" is a required field`
      })
});

module.exports = schema;

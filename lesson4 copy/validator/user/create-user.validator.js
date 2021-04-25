const Joi = require('Joi');
const { regexpEnum } = require('../../constatnt');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50),
    age: Joi.number().integer(),
    email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required()
})
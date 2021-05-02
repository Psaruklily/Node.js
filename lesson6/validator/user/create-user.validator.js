const Joi = require('Joi');
const { regexpEnum } = require('../../constatnt');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required(),
    age: Joi.number().integer().required(),
    email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required()
})
const Joi = require('joi')

const createCategoriesSchema = Joi.object({
    name: Joi.string().min(5).max(25).trim().required(),
    description: Joi.string().alphanum().trim(),
    image: Joi.string(),
    state: Joi.number().integer().positive().max(1),
})

const updateCategoriesSchema = Joi.object({
    name: Joi.string().min(5).max(25).trim().required(),
    description: Joi.string().alphanum().trim(),
    image: Joi.string(),
    state: Joi.number().integer().positive().max(1),
})

const getCategoriesSchema = Joi.object({
    id: Joi.number().integer().required()
})

module.exports = { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema }
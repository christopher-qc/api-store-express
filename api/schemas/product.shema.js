const Joi = require('joi')

const createProductSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(15).required(),
  price: Joi.number().integer().min(10).required(),
  image: Joi.string().uri().required(),
})

const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(15),
  price: Joi.number().integer().min(10),
  image: Joi.string().uri(),
})

const getProductSchema = Joi.object({
  id: Joi.string().uuid().required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }

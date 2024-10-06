const Joi = require('joi')

const createProductsSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  code: Joi.string().alphanum().min(3).max(15).required(),
  stock: Joi.number().integer().min(3).max(15).required(),
  price: Joi.number().integer().min(3).max(15).required(),
})

const updateProductsSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  code: Joi.string().alphanum().min(3).max(15).required(),
  stock: Joi.number().integer().min(3).max(15).required(),
  price: Joi.number().integer().min(3).max(15).required(),
})

const getProductsSchema = Joi.object({
  id: Joi.string().uuid().required()
})

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema }

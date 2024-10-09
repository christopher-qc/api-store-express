const Joi = require('joi')

const createProductsSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  code: Joi.string().min(3).max(15).required(),
  stock: Joi.number().integer().min(3).max(15).required(),
  price: Joi.number().integer().min(3).required(),
  categoryId: Joi.number().integer().required(),
})

const updateProductsSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  code: Joi.string().min(3).max(15).required(),
  stock: Joi.number().integer().min(3).max(15).required(),
  price: Joi.number().integer().min(3).required(),
  categoryId: Joi.number().integer(),
})

const getProductsSchema = Joi.object({
  id: Joi.string().uuid().required()
})

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema }

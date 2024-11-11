const Joi = require('joi')

const createProductsSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  code: Joi.string().min(3).max(15).required(),
  stock: Joi.number().integer().min(1).required(),
  price: Joi.number().integer().min(1).required(),
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

const queryProductsSchema = Joi.object({
  limit: Joi.number().integer(),
  page: Joi.number().integer(),
  price_min: Joi.number().integer(),
  price_max: Joi.number().integer().when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required()
  }),
})

module.exports = { createProductsSchema, updateProductsSchema, getProductsSchema, queryProductsSchema }

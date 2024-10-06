const Joi = require('joi')

const createUsersSchema = Joi.object({
  email: Joi.string().min(3).max(15).required(),
  password: Joi.string().alphanum().min(3).max(15).required(),
})

const updateUsersSchema = Joi.object({
  email: Joi.string().min(3).max(15).required(),
  password: Joi.string().alphanum().min(3).max(15).required(),
})

const getUsersSchema = Joi.object({
  id: Joi.string().uuid().required()
})

module.exports = { createUsersSchema, updateUsersSchema, getUsersSchema }

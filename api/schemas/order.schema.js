const Joi = require('joi');

const getOrderSchema = Joi.object({
	id: Joi.number().integer().required(),
})

const createOrderSchema = Joi.object({
	userId: Joi.number().integer().required(),
    status: Joi.string()
});

const updateOrderSchema = Joi.object({
	userId: Joi.number().integer().required(),
    status: Joi.string()
});

module.exports = {
	getOrderSchema,
	createOrderSchema,
    updateOrderSchema
}


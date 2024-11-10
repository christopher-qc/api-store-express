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

const addItemSchema = Joi.object({
	orderId: Joi.number().integer().required(),
	productId: Joi.number().integer().required(),
	amount: Joi.number().integer().min(1).required(),
});

module.exports = {
	getOrderSchema,
	createOrderSchema,
    updateOrderSchema,
	addItemSchema
}


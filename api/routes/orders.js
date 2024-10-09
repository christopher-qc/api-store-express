const express = require('express');
const router = express.Router();

const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema, updateOrderSchema } = require('../schemas/order.schema');

const service = new OrderService();

router.get('/', async (req, res, next) => {
    try {
        const order = await service.find()
        res.json(order)
    } catch (err) {
        console.log(err)
        next(err)
    }
}
)

router.get('/:id',
	validatorHandler(getOrderSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const order = await service.findOne(id);
			res.json(order);
		} catch (error) {
			next(error);
		}
	}
);

router.post('/',
	validatorHandler(createOrderSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newOrder = await service.created(body);
			res.status(201).json({ newOrder });
		} catch (error) {
            console.log(error)
			next(error);
		}
	}
);

router.patch('/:id',
    validatorHandler(getOrderSchema, 'params'),
    validatorHandler(updateOrderSchema, 'body'),
    async(req, res) => {
        try {
            console.log(req.params)
            const { body, params} = req
            const { id } = params
            const updateOrder = await service.update(id, body)
            res.status(201).json(updateOrder);
        } catch (err) {
            console.log(err)
        }
        
    }
)

module.exports = router;

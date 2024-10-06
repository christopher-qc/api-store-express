const express = require('express')
const router = express.Router()

const ProductsService = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getProductsSchema } = require('../schemas/product.schema')

const service = new ProductsService();

router.get('/', async (req, res) => {
  const product = await service.find()
  res.json(product)
})

router.get('/:id',
  validatorHandler(getProductsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id)
      res.json(product);
    } catch (err) {
      next(err)
    }
  }
);

module.exports = router
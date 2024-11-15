const express = require('express')
const router = express.Router()

const ProductsService = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getProductsSchema, createProductsSchema, queryProductsSchema } = require('../schemas/product.schema')

const service = new ProductsService();

router.get('/',
  validatorHandler(queryProductsSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await service.find(req.query)
      res.json(products)
    } catch (err) {
      next(err)
    }
  }
)

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

router.post('/',
  validatorHandler(createProductsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const products = await service.created(body);
      res.status(201).json(products)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
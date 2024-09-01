const express = require("express");
const router = express.Router();

const ProductService = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.shema')

const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    res.json(product);
  } catch (err) {
    next(err)
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const body = req.body;
  const product = await service.created(body);
  res.status(201).json(product)
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.status(201).json(product)
})


module.exports = router

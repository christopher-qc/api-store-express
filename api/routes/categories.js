const express = require('express')
const router = express.Router()

const CategoriesService = require('../services/category.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getCategoriesSchema, createCategoriesSchema, updateCategoriesSchema } = require('../schemas/category.schema')

const service = new CategoriesService();

router.get('/', async (req, res) => {
  const category = await service.find()
  res.json(category)
})

router.get('/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id)
      res.json(category);
    } catch (err) {
      next(err)
    }
  }
);

router.post('/',
  validatorHandler(createCategoriesSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  validatorHandler(updateCategoriesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user)
    } catch (err) {
      next(err)
    }
  })

module.exports = router
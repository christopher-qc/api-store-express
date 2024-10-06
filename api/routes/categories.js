const express = require('express')
const router = express.Router()

const CategoriesService = require('../services/category.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getCategoriesSchema } = require('../schemas/category.schema')

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

module.exports = router
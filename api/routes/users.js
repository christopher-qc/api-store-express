const express = require("express");
const router = express.Router();

const UsersService = require('../services/user.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createUsersSchema, updateUsersSchema, getUsersSchema } = require('../schemas/user.shema')

const service = new UsersService();

router.get('/', async (req, res) => {
  const user = await service.find();
  res.json(user);
})

router.get('/:id',
  validatorHandler(getUsersSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id)
      res.json(user);
    } catch (err) {
      next(err)
    }
  });

router.post('/',
  validatorHandler(createUsersSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const user = await service.created(body);
    res.status(201).json(user)
  })

router.patch('/:id',
  validatorHandler(getUsersSchema, 'params'),
  validatorHandler(updateUsersSchema, 'body'),
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.delete(id);
  res.status(201).json(user)
})


module.exports = router

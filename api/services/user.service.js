const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres')
// const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize')

class UserService {

  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
  }

  async created(data) {
    const newUser = models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta

  }

  async findOne(id) {
    const users = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFount('users not found');
    }

    return users;
  }

  async update(id, changes) {
    const users = await this.findOne(id)
    const rta = await users.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id };
  }
}

module.exports = UserService

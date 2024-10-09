'use strict';

const { Sequelize } = require('sequelize');
const { UserSchema, USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'name', UserSchema.name);
    await queryInterface.addColumn(USER_TABLE, 'lastname', UserSchema.lastname)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'name');
    await queryInterface.removeColumn(USER_TABLE, 'lastname')
  }
};

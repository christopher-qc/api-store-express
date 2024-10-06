'use strict';

const { Sequelize } = require('sequelize');
const { UserSchema, USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'name', {
      allowNull: false,
      type: Sequelize.STRING
    });
    await queryInterface.addColumn(USER_TABLE, 'lastname', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, 'name');
    await queryInterface.removeColumn(USER_TABLE, 'lastname')
  }
};

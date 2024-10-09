'use strict';

const { Sequelize } = require('sequelize');
const { ProductsSchema, PRODUCT_TABLE } = require('./../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'updatedAt', ProductsSchema.updatedAt);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'updatedAt');
  }
};
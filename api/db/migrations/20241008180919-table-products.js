'use strict';

const { ProductsSchema, PRODUCT_TABLE } = require('./../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductsSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};

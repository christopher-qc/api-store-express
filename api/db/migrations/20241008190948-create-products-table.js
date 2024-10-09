'use strict';

const { ProductsSchema, PRODUCT_TABLE } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Volver a crear la tabla products
    await queryInterface.createTable(PRODUCT_TABLE, ProductsSchema);
  },

  async down(queryInterface) {
    // Opción para eliminar la tabla si se revierte esta migración
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};

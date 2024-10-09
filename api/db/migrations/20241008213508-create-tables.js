'use strict';

const { CategoriesSchema, CATEGORY_TABLE } = require('./../models/category.model');
const { PRODUCT_TABLE, ProductsSchema } = require('./../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Volver a crear la tabla products
    await queryInterface.createTable(CATEGORY_TABLE, CategoriesSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductsSchema);

  },

  async down(queryInterface) {
    // Opción para eliminar la tabla si se revierte esta migración
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);

  }
};

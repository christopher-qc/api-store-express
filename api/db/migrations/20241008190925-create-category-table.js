'use strict';

const { CategoriesSchema, CATEGORY_TABLE } = require('./../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Volver a crear la tabla products
    await queryInterface.createTable(CATEGORY_TABLE, CategoriesSchema);
  },

  async down(queryInterface) {
    // Opción para eliminar la tabla si se revierte esta migración
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};

'use strict';

const { PRODUCT_TABLE } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Cambiar el tipo de dato de la columna code a STRING
    await queryInterface.changeColumn(PRODUCT_TABLE, 'code', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revertir el cambio a INTEGER si es necesario
    await queryInterface.changeColumn(PRODUCT_TABLE, 'code', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  }
};

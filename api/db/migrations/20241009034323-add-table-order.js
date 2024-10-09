'use strict';

const { OrdersSchema, ORDER_TABLE } = require('./../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Volver a crear la tabla products
    await queryInterface.createTable(ORDER_TABLE, OrdersSchema);
  },

  async down(queryInterface) {
    // Opción para eliminar la tabla si se revierte esta migración
    await queryInterface.dropTable(ORDER_TABLE);
  }
};

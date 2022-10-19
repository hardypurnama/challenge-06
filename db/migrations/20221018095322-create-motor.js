'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Motors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      manufaktur: {
        type: Sequelize.STRING
      },
      transmisi: {
        type: Sequelize.STRING
      },
      tglPembuatan: {
        type: Sequelize.DATE
      },
      foto: {
        type: Sequelize.STRING
      },
      hargaSewa: {
        type: Sequelize.DECIMAL
      },
      createdBy: {
        type: Sequelize.STRING
      },
      updatedBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Motors');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tripID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Trips',
          key: 'id',
          as: 'tripID'
  }
      },
      name: {
        type: Sequelize.STRING
      },
      dayCode: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      // lat: {
      //   type: Sequelize.INTEGER
      // },
      // lng: {
      //   type: Sequelize.INTEGER
      // },
      phone: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
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
    await queryInterface.dropTable('Destinations');
  }
};
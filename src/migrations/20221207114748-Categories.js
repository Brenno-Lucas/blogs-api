'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        autoIncrement: true,
        primaryKey: true, 
        type: Sequelize.INTEGER, 
      },
      name: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('categories');
  }
};

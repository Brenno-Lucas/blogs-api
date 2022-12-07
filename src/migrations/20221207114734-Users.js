"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: { 
        autoIncrement: true,
        primaryKey: true, 
        type: Sequelize.INTEGER, 
      },
      display_name: Sequelize.STRING,
      email: { 
        type: Sequelize.STRING, 
        unique: true 
      },
      password: Sequelize.STRING,
      image: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('users'); 
  },
};

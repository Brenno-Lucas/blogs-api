'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: 'post_id',
        references: { 
          model: 'categories', 
          key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      underscored: true,
      tableName: 'post_categories'
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('posts_categories');
  }
};

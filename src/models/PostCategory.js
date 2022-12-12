module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: false,
      underscored: true,
      modelName: 'posts_categories' });

    PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'posts',
      through: PostCategory
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories',
      through: PostCategory
    });
  };
  return PostCategory;
};
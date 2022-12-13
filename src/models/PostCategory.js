const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER },
    categoryId: { type: DataTypes.INTEGER }
  },
    { timestamps: false, underscored: true, tableName: 'posts_categories' });

    PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId', otherKey: 'postId', as: 'blog_posts', through: PostCategory
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId', otherKey: 'categoryId', as: 'categories', through: PostCategory
    });
  };
  return PostCategory;
};
module.exports = PostCategoryModel;
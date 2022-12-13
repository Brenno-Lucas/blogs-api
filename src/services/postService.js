const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const create = async (infos, categoryIds) => {
  const action = await sequelize.transaction();
  try {
    const data = await BlogPost.create(infos, { transaction: action });
    const { id } = data.dataValues;
    const bulk = Promise.all(categoryIds.map(async (e) => ({ postId: id, categoryId: e })));
    await PostCategory.bulkCreate(bulk, { transaction: action });
    await action.commit();
    return data;
  } catch (error) {
    await action.rollback();
    throw error;
  }
};

const getAll = async () => {
  const data = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
    attributes: { exclude: ['user_id', 'post_id', 'category_id'] },
  });
  return data;
};

module.exports = {
  create,
  getAll,
};
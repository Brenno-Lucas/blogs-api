const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false, underscored: true, tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPost' });
  };
  return User;
}
module.exports = UserModel;
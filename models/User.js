class User extends Model {}

User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});
let User;

module.exports = User;

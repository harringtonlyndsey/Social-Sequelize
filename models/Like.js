class Like extends Model {}

Like.init({
  reactionType: DataTypes.STRING,
  createdAt: DataTypes.STRING
});
let Like;

module.exports = Like;

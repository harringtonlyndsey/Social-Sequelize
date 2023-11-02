class Comment extends Model {}

Comment.init({
  body: DataTypes.STRING,
  ceatedAt: DataTypes.STRING,
});
let Comment;

module.exports = Comment;

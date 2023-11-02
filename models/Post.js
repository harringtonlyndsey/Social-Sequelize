class Post extends Model{};

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})
let Post;


module.exports = Post;
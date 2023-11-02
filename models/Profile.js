class Profile extends Model {}

Profile.init({
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.STRING,
});
let Profile;

module.exports = Profile;

const { mongoose, Schema } = require("../db");

// Crear esquema y modelo User...

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  description: String,
  profileImg: String,
  following: [{ id: Schema.Types.ObjectId }],
  followers: [{ id: Schema.Types.ObjectId }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

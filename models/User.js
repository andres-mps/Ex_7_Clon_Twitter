const { mongoose, Schema } = require("../db");

// Crear esquema y modelo User...

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  bio: String,
  avatar: String,
  following: Schema.Types.ObjectId,
  followers: Schema.Types.ObjectId,
  createdAt: Date,
  updatedAt: Date,
  tweets: Schema.Types.ObjectId,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const { mongoose, Schema } = require("../db");
const { User } = require("./User");

const tweetSchema = new Schema({
  content: {
    type: String,
    maxLength: 140,
  },
  createdAt: Date,
  // likes: Number, // CAMBIAR Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;

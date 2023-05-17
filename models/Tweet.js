const { mongoose, Schema } = require("../db");
const { User } = require("./User");

const tweetSchema = new Schema({
  text: {
    type: String,
    maxLength: 140,
  },
  createdAt: Date,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;

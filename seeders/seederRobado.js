const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 20; i++) {
    const randomEmail = faker.internet.email();
    try {
      const user = new User({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: randomEmail,
        username: randomEmail,
        password: await bcrypt.hash(faker.internet.password(), 5),
        description: faker.lorem.sentence(20),
        profilePic: faker.image.avatar(),
        followers: [],
        following: [],
        tweets: [],
      });
      console.log(user.id);

      for (let i = 0; i < Math.floor(Math.random() * 30) + 1; i++) {
        const tweet = new Tweet({
          content: faker.lorem.sentence(20),
          author: user,
        });
        user.tweets.push(tweet);
        await tweet.save();
      }

      users.push(user);
    } catch (error) {
      console.error("Error en el seeder de Users:", error);
    }
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
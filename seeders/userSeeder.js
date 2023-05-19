/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */
const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  /*=========== LOOP USERS ================*/
  const users = [];
  const tweets = [];
  try {
    for (let i = 0; i < 50; i++) {
      const lastname = faker.name.lastName();
      const user = new User({
        firstname: faker.name.firstName(),
        lastname: lastname,
        username: `@${lastname}`,
        email: `${lastname}@email.com`,
        password: await bcrypt.hash("123", 5),
        bio: faker.lorem.paragraph(),
        avatar: faker.image.avatar(),
        //following:,  // los cargaremos luego
        //followers:, // los cargaremos luego
        createdAt: faker.date.past(),
        updatedAt: new Date(),
        // tweets: , // los cargaremos luego
      });

      for (let i = 0; i < 2; i++) {
        const tweet = new Tweet({
          content: faker.lorem.sentence(10),
          author: user,
          likes: user,
        });
        user.tweets.push(tweet);
        tweets.push(tweet);
      }
      users.push(user);
    }
  } catch (error) {
    console.log(error);
  }

  for (const tweet of tweets) {
    tweet.likes = _.sampleSize(users, [(n = 10)]);
  }
  for (const user of users) {
    const followings = _.sampleSize(users, [(n = 15)]);
    const followedByUser = followings.filter((u) => u.id !== user.id); // nos aseguramos que los followings no coincidan con el user
    user.following.push(...followedByUser); // user.following = followedByUser;
    for (const following of followedByUser) {
      following.followers.push(user);
    }
  }

  await Tweet.insertMany(tweets);
  await User.insertMany(users);

  console.log("[Database] Se agregaron FOLLOWER, FOLLOWING y TWEETS.");

  console.log("[Database] Se corrió el seeder de Users.");
};

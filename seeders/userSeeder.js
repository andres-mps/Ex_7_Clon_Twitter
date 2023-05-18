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

faker.locale = "es";

module.exports = async () => {
  /*=========== LOOP USERS ================*/
  const users = [];
  const usersId = [];

  for (let i = 0; i < 10; i++) {
    const user = new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: `@${faker.internet.userName()}`,
      email: faker.internet.email(),
      password: "123",
      bio: faker.lorem.paragraph(),
      avatar: faker.name.lastName(), // CAMBIAR
      // following: ,  // los cargaremos asyncronicos luego de obtener los ID de USERS
      // followers: , // los cargaremos asyncronicos luego de obtener los ID de USERS
      createdAt: faker.date.past(),
      updatedAt: new Date(),
      // tweets: , // los cargaremos asyncronicos luego de obtener los ID de los TWEETS
    });
    users.push(user);
    usersId.push(user.id);
  }
  console.log(usersId);
  console.log(users);
  /*===========fin LOOP USERS ================*/

  /*=========== LOOP TWEETS tomando user.id ================*/
  const tweets = [];
  const tweetsId = [];

  for (let i = 0; i < 100; i++) {
    const tweet = new Tweet({
      content: "test contnet",
      createdAt: faker.date.past(),
      // likes: 2,
      user: [_.sample(usersId)], // toma 1 elemento random del array usersId.
    });

    tweets.push(tweet);
    tweetsId.push(tweet.id);
  }
  /*=========== fin LOOP TWEETS tomando user.id ================*/

  // guardamos en la base los documentos TWEETS y USERS
  await Tweet.insertMany(tweets);
  await User.insertMany(users);

  /*=========== LOOP USERS: FOLLOWER, FOLLOWING & TWEETS ================*/

  //buscamos los users por ID para agregarles FOLLOWERS, FOLLOWING y TWEETS:
  for (let i = 0; i < 10; i++) {
    await User.findByIdAndUpdate(usersId[i], {
      following: [_.sample(usersId)],
      followers: [_.sample(usersId)],
      tweets: [_.sample(tweetsId)],
    });
  }
  /*=========== fin LOOP USERS: FOLLOWER, FOLLOWING & TWEETS ================*/

  console.log("[Database] Se agregaron FOLLOWER, FOLLOWING y TWEETS.");

  console.log("[Database] Se corrió el seeder de Users.");
};

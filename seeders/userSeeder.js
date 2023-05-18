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
const bcrypt = require("bcryptjs")

faker.locale = "es";

module.exports = async () => {
  /*=========== LOOP USERS ================*/
  
 const users = [];
 const tweets = [];
 try{
    for (let i = 0; i < 10; i++) {
    const randomEmail = faker.internet.email();
    const user = new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: randomEmail,
      email: randomEmail,
      password: await bcrypt.hash("123", 5),
      bio: faker.lorem.paragraph(),
      avatar: faker.name.lastName(), // CAMBIAR
      //following:,  // los cargaremos asyncronicos luego de obtener los ID de USERS
      //followers:, // los cargaremos asyncronicos luego de obtener los ID de USERS
      createdAt: faker.date.past(),
      updatedAt: new Date(),
     // tweets: , // los cargaremos asyncronicos luego de obtener los ID de los TWEETS
    });
    users.push(user);
    for (let i = 0; i < 5; i++) {
      const tweet = new Tweet({
        content: faker.lorem.sentence(10),
        author: user, 
        likes: user,
      });
      user.tweets.push(tweet);
      await tweet.save();
      }
  
    }
 }catch(error){ 
  console.log(error)
}
  /*===========fin LOOP USERS ================*/

  /*=========== LOOP TWEETS tomando user.id ================*/
 
 


  /*=========== fin LOOP TWEETS tomando user.id ================*/

  // guardamos en la base los documentos TWEETS y USERS
  await Tweet.insertMany(tweets);
  await User.insertMany(users);

  /*=========== LOOP USERS: FOLLOWER, FOLLOWING & TWEETS ================*/
  //buscamos los users por ID para agregarles FOLLOWERS, FOLLOWING y TWEETS:
  
    /*=========== TRATANDO QUE FUNCIONE TWEETS POR AUTOR Y FOLLOWER/ING QUE NO SEAN EL USER ================*/
  // for (let i = 0; i < 10; i++) {
  //   const id = usersId[i];
  //   const author = await Tweet.find({user: id});
  //   const userFilter = _.filter(usersId, function(user) {
  //     return user != id;
  //   });
  //   console.log(userFilter)
  //   await User.findByIdAndUpdate(id, {
  //     following: [_.sample(usersId)],
  //     followers: [_.sample(usersId)],
  //     //tweets: //author.user,
  //   });
  // }
  /*=========== fin LOOP USERS: FOLLOWER, FOLLOWING & TWEETS ================*/

  console.log("[Database] Se agregaron FOLLOWER, FOLLOWING y TWEETS.");

  console.log("[Database] Se corrió el seeder de Users.");
};

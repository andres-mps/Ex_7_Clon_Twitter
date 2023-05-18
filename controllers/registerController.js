const bcrypt = require("bcryptjs");
const formidable = require("formidable");
const User = require("../models/User");

async function createUser(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/avatars",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    } = fields;

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: await bcrypt.hash(password, 10),
      bio: "",
      avatar: files["avatar"].newFilename,
    });

    newUser.save().then(res.redirect("/home"));

    // if (newUser) {
    //   req.login(newUser, () => res.redirect("/home"));
    // } else {
    //   res.redirect("back");
    // }
  });
}

module.exports = { createUser };

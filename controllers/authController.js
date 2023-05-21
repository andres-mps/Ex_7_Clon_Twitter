const passport = require("passport");
const bcrypt = require("bcryptjs");
const formidable = require("formidable");
const User = require("../models/User");

async function login(req, res) {
  res.render("pages/login");
}

async function loginPassport(req, res, next) {
  passport.authenticate("local", {
    successRedirect: req.session.redirectTo ? req.session.redirectTo : "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res);
}

async function register(req, res) {
  res.render("pages/register");
}

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

    newUser.save().then(res.redirect("/"));

    // if (newUser) {
    //   req.login(newUser, () => res.redirect("/home"));
    // } else {
    //   res.redirect("back");
    // }
  });
}

async function logout(req, res) {
  // req.logout(function (err) {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.redirect("/");
  // });
  req.session.destroy(function (err) {
    res.redirect("/");
  });

  console.log("Logout successful");
}
module.exports = {
  login,
  loginPassport,
  register,
  createUser,
  logout,
};

const passport = require("passport");

async function login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: req.session.redirectTo ? req.session.redirectTo : "/",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res);
}

// async function logout(req, res) {
//     req.logout(function (err) {
//       if (err) {
//         return next(err);
//       }
//       res.redirect("/");
//     });
//     console.log("Logout successful");
// }
module.exports = { 
    login, 
    //logout 
};
const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");

router.get("/", pagesController.showHome);
router.get("/login", function (req, res) {
  res.render("pages/login");
});
router.get("/register", function (req, res) {
  res.render("pages/register");
});
//Luego se moverá esta ruta a authRoutes//
router.get("/profile", function (req, res) {
  res.render("pages/profile");
});
<<<<<<< Updated upstream
router.post("/register", authController.createUser);
=======
router.post("/register", registerController.createUser);
router.get("/prueba", (req, res)=>{
  res.render("partials/sidebarRight")
})
>>>>>>> Stashed changes
router.get("*", function (req, res) {
  res.status(404).render("pages/404");
});


module.exports = router;

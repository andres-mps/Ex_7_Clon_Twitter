const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

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
router.get("*", function (req, res) {
  res.status(404).render("pages/404");
});

module.exports = router;

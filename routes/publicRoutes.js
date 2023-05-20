const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const tweetController = require("../controllers/tweetController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

router.get("/",ensureAuthenticated, pagesController.showHome);

//Luego se moverá esta ruta a authRoutes//
router.get("/profile",ensureAuthenticated, tweetController.index, function (req, res) {
  
  res.render("pages/profile");
});
router.get("/prueba", (req, res) => {
  res.render("partials/sidebarRight");
});
router.get("*", function (req, res) {
  res.status(404).render("pages/404");
});

module.exports = router;

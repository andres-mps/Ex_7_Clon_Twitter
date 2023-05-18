const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const registerController = require("../controllers/registerController");

router.get("/", pagesController.showHome);
router.get("/login", function (req, res) {
  res.render("pages/login");
});
router.get("/register", function (req, res) {
  res.render("pages/register");
});
router.post("/register", registerController.createUser);
router.get("*", function (req, res) {
  res.status(404).render("pages/404");
});

module.exports = router;

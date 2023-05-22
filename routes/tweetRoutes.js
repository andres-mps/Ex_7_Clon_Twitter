const express = require("express");
const router = express.Router();
const userController = require("../controllers/tweetController");

// router.get("/", userController.index);
router.get("/crear", tweetController.create);
// router.get("/:id", userController.show);
router.post("/", tweetController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;

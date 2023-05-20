const express = require("express");
const router = express.Router();
const userFollowsController = require("../controllers/userFollowsController");

router.get("/following", userFollowsController.index);
// router.get("/crear", userFollowsController.create);
// router.get("/:id", userFollowsController.show);
// router.post("/", userFollowsController.store);
// router.get("/editar/:id", userFollowsController.edit);
// router.patch("/:id", userFollowsController.update);
// router.delete("/:id", userFollowsController.destroy);

router.get("/followers", userFollowsController.indexFollowers);
router.patch("/followers", userFollowsController.update);

module.exports = router;

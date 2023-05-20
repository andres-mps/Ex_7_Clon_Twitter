const express = require("express");
const router = express.Router();
const userFollowsController = require("../controllers/userFollowsController");

router.get("/following", userFollowsController.indexFollowing);
// router.get("/crear", userFollowsController.create);
// router.get("/:id", userFollowsController.show);
// router.post("/", userFollowsController.store);
// router.get("/editar/:id", userFollowsController.edit);
// router.patch("/:id", userFollowsController.update);
// router.delete("/:id", userFollowsController.destroy);

router.get("/followers", userFollowsController.indexFollowers);
router.patch("/followers/update", userFollowsController.updateFollower);

module.exports = router;

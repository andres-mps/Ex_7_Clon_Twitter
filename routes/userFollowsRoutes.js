const express = require("express");
const router = express.Router();
const userFollowsController = require("../controllers/userFollowsController");

router.get("/:username/following", userFollowsController.indexFollowing);
router.patch("/unfollowFollowing/:followingId", userFollowsController.unfollowFollowing);

// router.get("/crear", userFollowsController.create);
// router.get("/:id", userFollowsController.show);
// router.post("/", userFollowsController.store);
// router.get("/editar/:id", userFollowsController.edit);
// router.patch("/:id", userFollowsController.update);
// router.delete("/:id", userFollowsController.destroy);

router.get("/followers", userFollowsController.indexFollowers);
router.patch("/followFollower/:followerId", userFollowsController.followFollower);
router.patch("/unfollowFollower/:followerId", userFollowsController.unfollowFollower);

module.exports = router;

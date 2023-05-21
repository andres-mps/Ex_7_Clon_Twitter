const User = require("../models/User");
const Tweet = require("../models/Tweet");
const _ = require("lodash");

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// ============ VISTA FOLLOWING ====================
async function indexFollowing(req, res) {
  const user = await User.findOne({ username: req.user.username }).populate("following");
  // res.json(user);
  res.render("pages/following", { user });
}

async function unfollowFollowing(req, res) {
  const followingId = req.params.followingId;
  // unfollow:
  await User.findByIdAndUpdate(req.user.id, { $pull: { following: followingId } });
  //quitamos USER de lista FOLLOWERS:
  await User.findByIdAndUpdate(followingId, { $pull: { followers: req.user.id } });
  res.redirect(`/${req.user.username}/following`);
}
// ============ VISTA FOLLOWING ====================

// ============ VISTA FOLLOWERS ====================
async function indexFollowers(req, res) {
  const user = await User.findOne({ username: req.user.username }).populate("followers");
  console.log(req.user.username);
  // res.json(req.user);
  res.render("pages/followers", { user });
}

async function followFollower(req, res) {
  const followerId = req.params.followerId;
  // follow a Follower:
  await User.findByIdAndUpdate(req.user.id, { $push: { following: followerId } });
  //agregamos el User como Follower
  await User.findByIdAndUpdate(followerId, { $push: { followers: req.user.id } });
  res.redirect(`/${req.user.username}/followers`);
}

async function unfollowFollower(req, res) {
  const followerId = req.params.followerId;
  // follow a Follower:
  await User.findByIdAndUpdate(req.user.id, { $pull: { following: followerId } });
  //agregamos el User como Follower
  await User.findByIdAndUpdate(followerId, { $pull: { followers: req.user.id } });
  res.redirect(`/${req.user.username}/followers`);
}
// ============ VISTA FOLLOWERS ====================

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  indexFollowing,
  unfollowFollowing,
  show,
  create,
  store,
  edit,
  indexFollowers,
  followFollower,
  unfollowFollower,
  destroy,
};

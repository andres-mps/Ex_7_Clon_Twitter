const User = require("../models/User");
const Tweet = require("../models/Tweet");
const _ = require("lodash");

// Display a listing of the resource.
async function indexFollowing(req, res) {
  const user = await User.findOne({ username: req.user.username }).populate("following");

  // res.json(user);
  res.render("pages/following", { user });
}

async function indexFollowers(req, res) {
  const user = await User.findOne({ username: req.user.username }).populate("followers");
  console.log(req.user.username);
  // res.json(req.user);
  res.render("pages/followers", { user });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function updateFollower(req, res) {
  // seguir a un Follower:
  await User.findByIdAndUpdate(req.user.id, {
    $push: { following: "64693aad15047cd3afe190e2" },
  });
  //agregamos al User como Follower
  await User.findByIdAndUpdate("64693aad15047cd3afe190e2", {
    $push: { followers: req.user.id },
  });
  res.redirect("/usuarios/followers");
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  indexFollowing,
  indexFollowers,
  show,
  create,
  store,
  edit,
  updateFollower,
  destroy,
};

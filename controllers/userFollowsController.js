const User = require("../models/User");
const Tweet = require("../models/Tweet");
const _ = require("lodash");

// Display a listing of the resource.
async function index(req, res) {
  const user = await User.findOne({ username: "@Medrano" }).populate("following");

  // res.json(user);
  res.render("pages/following", { user });
}

async function indexFollowers(req, res) {
  const user = await User.findOne({ username: "@Carmona" }).populate("followers");
  console.log(user._id);
  console.log(user.followers[0].followers);

  if (user.followers[0].followers.includes(user._id)) {
    console.log("presente");
  } else {
    console.log("NO presente");
  }

  console.log(req.user);
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
async function update(req, res) {
  await User.findByIdAndUpdate(
    "6468b089b64facf457306827",
    following.push({ id: "6468b089b64facf45730682c" }),
  );

  // await User.updateOne(
  //   { _id: "6468b089b64facf457306827" },
  //   { $push: { following: { id: "6468b089b64facf45730682c" } } },
  // );

  return res.redirect("/usuarios/followers");
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  indexFollowers,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};

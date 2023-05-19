const User = require("../models/User");
const Tweet = require("../models/Tweet");
// const { createUser } = require("./authController");

// Display a listing of the resource.
async function index(req, res) {
  const user = await User.findOne({ username: "@Verduzco" }).populate("following");
  // res.json(user);
  res.render("pages/following", { user });
}

async function indexFollowers(req, res) {
  const user = await User.findOne({ username: "@Naranjo" }).populate("followers");
  // res.json(user);
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
async function update(req, res) {}

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

const User = require("../models/User");
const Tweet = require("../models/Tweet");

// Display a listing of the resource.
async function showProfile(req, res) {
  try {
    const user = await User.find({ username: req.params.username });
    const tweets = await Tweet.find({ author: user }).populate("author");
    // res.json(tweets);
    res.render("pages/profile", { tweets });
  } catch (error) {
    console.log(error);
  }
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
  showProfile,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};

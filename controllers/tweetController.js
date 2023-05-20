const Tweet = require("../models/Tweet")

// Display a listing of the resource.
async function index(req, res) {
  const tweets = await Tweet.find({author: req.user.id})
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
async function showLikes(req, res) {

}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  showLikes
};

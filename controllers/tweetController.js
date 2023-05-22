const Tweet = require("../models/Tweet");
<<<<<<< Updated upstream
=======
const User = require("../models/User");
>>>>>>> Stashed changes

// Display a listing of the resource.
async function index(req, res, next) {
  const tweets = await Tweet.find({ author: req.user.id });
  req.user.tweets = tweets;
  // console.log(req.user.tweets[0].likes.length);
  return next();
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
async function showLikes(req, res) {}

async function homeTweets(req, res) {
  try{
    const following = req.user.following
    const tweets = []
    for(const followingId of following){
      const followingTweets = await Tweet.find({author: followingId}).populate("author");
      tweets.push(...followingTweets);
    }
    
  }catch(error){
    console.log(error);
  }
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  showLikes,
<<<<<<< Updated upstream
=======
  homeTweets
>>>>>>> Stashed changes
};

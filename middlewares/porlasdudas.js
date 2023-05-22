async function isOwner(req, res, next) {
    //req.user.tweets.some(tweet => tweet.id === tweetId) ? next() : req.redirect("back")
   
     const tweet = await Tweet.findById(req.params.id);
     console.log(req.user.id);
     console.log(tweet.author.toString())
     console.log(tweet.author.toString() === req.user.id)
   
     if (tweet.author.toString() === req.user.id) {
       return next();
     }
     return req.redirect("back")
}
   
   module.exports = isOwner;
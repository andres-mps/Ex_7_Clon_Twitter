const { Tweet } = require("../models/Tweet");

async function isOwner(req, res, next) {
  const { userId } = await Tweet.findByPk(req.params.id);
  if (req.user && req.user.id === userId) {
    return next();
  }
  return res.redirect("back");
}

module.exports = isOwner;

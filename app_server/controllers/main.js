const index = function(req, res) {
	// res.json({"algo": "", "dale":null});
  res.render('index', { user: req.user });
};

module.exports = {
  index
}; 
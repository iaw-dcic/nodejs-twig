/* GET home page */
const index = function(req, res) {
	// res.json({"algo": "", "dale":null});
  res.render('index', { title: 'Sal\'s Pizza v4-twig', user: req.user });
};

module.exports = {
  index
}; 

/* GET home page */
const index = function(req, res) {
  res.render('index', { title: 'Sal\'s Pizza v4-twig' });
};

module.exports = {
  index
}; 

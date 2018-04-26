const mongoose = require('mongoose');
const Pizza = mongoose.model('Pizza');

/* GET home page */
const index = function(req, res) {
	Pizza
		.find()
		.exec((err, pizzas) => {
			if (err) { 
				res.redner('error', { 
					error : err
				});    
	        } else {
				res.render('index', {
					title: 'Sal\'s Pizza v4-twig', 
					pizzas: pizzas 
				});
			}
		})
};

module.exports = {
  index
}; 

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

const getPedido = function (req, res) {
	Pedido
		.findById(req.user._id)
		.exec((err, pedido) => {
			if (err) { 
				res
					.status(404)
					.json(err);    
        	} else {
				res
					.status(200)
					.json(pedido.pizzas);
			}
		})
}

const setPedido = function (req, res) {
	Pedido
		.update({_id: req.user._id}, {usuario: req.user.username, pizzas: req.body.pedido}, 
			{upsert: true, setDefaultsOnInsert: true}, (err, pedido) => {
				if (err) { 
					res
						.status(400)
						.json(err);    
	        	} else {
					res
						.status(201)
						.json(pedido);
				}
			})
}

module.exports = {
	getPedido, setPedido
};
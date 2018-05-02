const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  usuario: String,
  pizzas: [mongoose.Schema.Types.ObjectId]
});

mongoose.model('Pedido', pedidoSchema);
var express = require('express');
var router = express.Router();
const pizzaApi = require('../controllers/pizzaApi');
const pedidoApi = require('../controllers/pedidoApi');

/* GET home page. */
router.get('/pizzas', pizzaApi.getPizzas);
router.get('/pedidos', pedidoApi.getPedido);
router.post('/pedidos', pedidoApi.setPedido);

module.exports = router;

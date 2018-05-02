var express = require('express');
var router = express.Router();
const pizzaApi = require('../controllers/pizzaApi');
const pedidoApi = require('../controllers/pedidoApi');
const middleware = require('../auth/middleware');

/* GET home page. */
router.get('/pizzas', pizzaApi.getPizzas);
router.get('/pedidos', middleware, pedidoApi.getPedido);
router.post('/pedidos', middleware, pedidoApi.setPedido);

module.exports = router;

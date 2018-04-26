var express = require('express');
var router = express.Router();
const pizzaApi = require('../controllers/pizzaApi');

/* GET home page. */
router.get('/pizzas', pizzaApi.getPizzas);

module.exports = router;

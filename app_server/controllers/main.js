/* GET home page */
const index = function(req, res) {
  res.render('index', { title: 'Sal\'s Pizza v4-twig',
	pizzas: { 
		clasicas: [
	    {
	        "nombre": "Fugazzeta Loca",
	        "precio": 200,
	        "tipo" : "clásicas"
	    },
	    {
	        "nombre": "Jamón y Queso",
	        "precio": 190,
	        "tipo" : "clásicas"
	    },
	    {
	        "nombre": "Especial",
	        "precio": 298,
	        "tipo" : "clásicas"
	    },
	    {
	        "nombre": "Muzzarella",
	        "precio": 210,
	        "tipo" : "clásicas"
	    },
	    {
	        "nombre": "Napolitana",
	        "precio": 240,
	        "tipo" : "clásicas"
	    }],
		especiales: [    
	    {
	        "nombre": "Queso Azul y Peras Caramelizadas",
	        "precio": 254,
	        "tipo" : "especiales"
	    },
	    {
	        "nombre": "Mariscos",
	        "precio": 264,
	        "tipo" : "especiales"
	    },
	    {
	        "nombre": "Pollo",
	        "precio": 234,
	        "tipo" : "especiales"
	    },
	    {
	        "nombre": "Hongos",
	        "precio": 253,
	        "tipo" : "especiales"
	    },
	    {
	        "nombre": "Ciervo Ahumado",
	        "precio": 250,
	        "tipo" : "especiales"
	    }]
    }
});
};
module.exports = {
  index
}; 

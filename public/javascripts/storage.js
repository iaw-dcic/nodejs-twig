
function guardarPedido(pedido) {
	const jsonString = JSON.stringify(Array.from(pedido.values()));
	$.ajax({
	    url: './api/pedidos',
	    type: 'POST',
	    data: JSON.stringify({pedido: JSON.parse(jsonString)}),
    	contentType: "application/json",
    	dataType: "json",
	    success: function(data){ 
	        callback((data != undefined) ? new Set(data) : new Set());
	    },
	    error: function(data) {
			window.localStorage.setItem("pedido", jsonString);
	    }
	});
}

function recuperarPedido(callback) {
	$.ajax({
	    url: './api/pedidos',
	    type: 'GET',
	    success: function(data){ 
	        callback((data != undefined) ? new Set(data) : new Set());
	    },
	    error: function(data) {
		    var result = window.localStorage.getItem("pedido");
		    callback((result != undefined) ? new Set(JSON.parse(result)) : new Set());
	    }
	});
}
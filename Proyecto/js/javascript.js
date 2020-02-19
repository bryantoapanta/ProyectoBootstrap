var x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
	
	 
	  $(".seleccion").mouseover(CambiaColor);
	  $(".seleccion").mouseout(CambiaColorNormal);
	
}



function CambiaColor() {
	  var x;
	  x=$(this);
	  x.css("color","#007bff");
	  x.css("background-color","white")
	 
}


function CambiaColorNormal() {
	  var x;
	  x=$(this);
	  x.css("color","#ffffff");
	   x.css("background-color","#007bff")
	  
}
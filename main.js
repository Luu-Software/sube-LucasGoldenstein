/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/



boton.addEventListener("click", () => {
  let suberegistrada = registrada.value;
  let kilometros = distancia.value;
  let precio
  
  if (suberegistrada = "si"){
    if (kilometros <= 3){
      precio = "$ 715.24";
    }
    else if (kilometros <= 6){
      precio = "$ 794.74";
    }

    else if (kilometros <= 12){
      precio = "$ 855.97";
    }

    else if (kilometros <= 12){
      precio = "$ 917.24	";
    }
  }
  
  tarifa.innerText = precio;
  });


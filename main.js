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
  let colectivo = tipoColectivo.value
  
  
  
if (colectivo === "ciudad"){
  if (suberegistrada === "si"){
    if (kilometros <= 3){
      precio = "$ 753,74";
    }
    else if (kilometros <= 6){
      precio = "$ 837,52";
    }

    else if (kilometros <= 12){
      precio = "$ 902,04";
    }

    else if (kilometros <= 27){
      precio = "$ 966,61";
    }
  }
  

  if (suberegistrada === "no"){
    if (kilometros <= 3){
      precio = "$ 1.198,45";
    }
    else if (kilometros <= 6){
      precio = "$ 1.331,66";
    }

    else if (kilometros <= 12){
      precio = "$ 1.434,24";
    }

    else if (kilometros <= 27){
      precio = "$ 1.536,91";
    }

    else if (kilometros > 27){
      precio = "¡La cantidad de kilometros ingresados supera el limite!";
    }
  }

  if (suberegistrada === "social"){
    if (kilometros <= 3){
      precio = "$ 339,18";
    }
    else if (kilometros <= 6){
      precio = "$ 376,88";
    }

    else if (kilometros <= 12){
      precio = "$ 405,91";
    }

    else if (kilometros <= 27){
      precio = "$ 434,97";
    }
  }}


  if (colectivo === "provincia"){
    if (suberegistrada === "si"){
      if (kilometros <= 3){
        precio = "$ 968,57";
      }
      else if (kilometros <= 6){
        precio = "$ 1.089,64";
      }
  
      else if (kilometros <= 12){
        precio = "$ 1.210,71";
      }
  
      else if (kilometros <= 27){
        precio = "$ 1.452,85";
      }

      else if (kilometros > 27){
        precio = "$ 1.708,07";
      }
    }
    
  
    if (suberegistrada === "no"){
      if (kilometros <= 3){
        precio = "$ 1.937,14";
      }
      else if (kilometros <= 6){
        precio = "$ 2.179,28";
      }
  
      else if (kilometros <= 12){
        precio = "$ 2.421,42";
      }
  
      else if (kilometros <= 27){
        precio = "$ 2.905,70";
      }

      else if (kilometros > 27){
        precio = "$ 3.416,14";
      }
    }
  
    if (suberegistrada === "social"){
      if (kilometros <= 3){
        precio = "$ 435,85";
      }
      else if (kilometros <= 6){
        precio = "$ 490,33";
      }
  
      else if (kilometros <= 12){
        precio = "$ 544,81	";
      }
  
      else if (kilometros <= 27){
        precio = "$ 653,78	";
      }

      else if (kilometros > 27){
        precio = "$ 768,63	";
      }
    }}


    if (colectivo === "nacional"){
      if (suberegistrada === "si"){
        if (kilometros <= 3){
          precio = "$ 700,00";
        }
        else if (kilometros <= 6){
          precio = "$ 779,78";
        }
    
        else if (kilometros <= 12){
          precio = "$ 839,86";
        }
    
        else if (kilometros <= 27){
          precio = "$ 899,99";
        }
  
        else if (kilometros > 27){
          precio = "$ 959,71";
        }
      }
      
    
      if (suberegistrada === "no"){
        if (kilometros <= 3){
          precio = "$ 1.113,00";
        }
        else if (kilometros <= 6){
          precio = "$ 1.239,85";
        }
    
        else if (kilometros <= 12){
          precio = "$ 1.335,38";
        }
    
        else if (kilometros <= 27){
          precio = "$ 1.430,98";
        }
  
        else if (kilometros > 27){
          precio = "$ 1.525,94";
        }
      }
    
      if (suberegistrada === "social"){
        if (kilometros <= 3){
          precio = "$ 315,00";
        }
        else if (kilometros <= 6){
          precio = "$ 350,90";
        }
    
        else if (kilometros <= 12){
          precio = "$ 377,93";
        }
    
        else if (kilometros <= 27){
          precio = "$ 404,99";
        }
  
        else if (kilometros > 27){
          precio = "$ 431,86";
        }
      }}
  

  tarifa.innerText = precio;
  });


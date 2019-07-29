function mostrar()
{

	var flag=0;
	var maximo = 0;
	var minimo = 0;
	var numero;
	var seguir='si';
	
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		seguir = prompt("Quiere ingresar otro numero?");
	
	
		if(numero > maximo || flag == 0){

			maximo = numero;
		} else{
			if(numero<minimo || flag == 0){
				minimo = numero;
				flag = 1; 
			}
		}
	
	
	
	
	
	
	}

	
	/*

	while(seguir!='no')
	{
		numero = parseInt(prompt("Ingrese un numero"));
		seguir = prompt("Quiere ingresar otro numero?");

		s
		if(numero > minimo) {
			minimo = numero;
		} 
		else{
			maximo = numero;
		}

		
		
	


	}
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
	


}//FIN DE LA FUNCIÓN
*//*

	contador++;
      var numero = parseInt(prompt("ingrese un numero"));
      respuesta = prompt("desea continuar?(no) para salir");
   
      if(contador == 1)
      {
         maximo = numero;
         minimo = numero;

         
      }
      

      if(contador >1 && numero > maximo)
      {
         numero = maximo;

      }
      
      if (contador > 1 && numero < minimo)


      {
         numero = minimo;

      }

      

   }
      document.getElementById("maximo").value=maximo;
      document.getElementById("minimo").value=minimo;
}


*/
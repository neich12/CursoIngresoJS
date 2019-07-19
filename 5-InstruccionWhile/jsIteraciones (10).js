function mostrar()
{

	var contador=0;
	var numero; 
	var numeroDos;
	var suma;
	alert(numero);

	numeroDos= 12;
	suma=numero*numeroDos;
	alert(suma);
	suma="3"; //bien
	suma=3; //bien
	suma="lalalala"; //error


	while((isNaN(suma))||(suma<0)||(suma>10))//isnan evalua si es un numero o no. Mayor a 0 o menor a 10
	{
		alert("error");
		suma=prompt("Error, reintegrese solo numeros");
	}
	alert("Ingreso correcto " +suma);

	while(sexo!="f" && sexo!="m") 
	{
		//error
	}


	/*
	if(isNaN(suma))// me devuelve true cuando esto no es un numero 
	{
		alert("error");

	}else{
		alert("bien");
	}

	*/




		//declarar contadores y variables 
	

	/*
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}
*/



}//FIN DE LA FUNCIÓN
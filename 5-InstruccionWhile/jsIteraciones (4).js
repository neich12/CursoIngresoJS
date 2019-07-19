function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while(!(numero> 0 && numero <10)) //buscar numero menor a 0 o mayor a 10 
	/*while(numero< 0 || numero >10) ) //de las dos formas funciona. */
	{
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}

}//FIN DE LA FUNCIÓN
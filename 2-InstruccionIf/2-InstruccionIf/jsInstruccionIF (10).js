function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var formingreso;

	formingreso = document.getElementById("FormIngreso").value;
{
	formingreso = Math.floor((Math.random() * 10) + 1)
	
	{if(formingreso <= 4)
	{alert("Su nota es " +formingreso +" Vamos todavia se puede");}}

	{if(formingreso >=5)
	if(formingreso <=8)
	{alert("Su nota es " +formingreso +" Aprobado");}}

	{if(formingreso >= 9)
	if(formingreso <= 10)
	{alert("Su nota es " +formingreso +" Excelente");}}
	

}
	
	FORMA CORRECTA

	if(nota <= 9){
		alert("Excelente")
	} else {
		if (nota >=4)
		alert("aprobo")
	} else {
		if(nota < 4){
			alert("Prox")
		}
	}

	//Math.random () * 10 Para que no nos de un numero 0 
	// Math.floor (Math.random () *10) + 1     = el +1 para que de un numero mas 
	


	//FORMULA = MATH.FLOOR(MATH.RANDOM () * (NUMEROMAX - NUMERO MINIMO)) + NUMEROM MINIMO
	
	//Math.floor = SIRVE PARA REDONDEAR EL NUMERO Y QUE DE SIN DECIMALES

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var localidad;
	var habitantes;
	var temperatura;
	var seguir; 
	var tempPar = 0;
	var habMenor = 0; 
	var localidadMenor;
	var i = 0;
	var cantLocalidades = 0; 
	var acumHabitantes = 0;
	var tempMinima = 0;
	var localidadMenor;
	
	do{
		localidad = prompt("Ingrese el nombre de una localidad");

		habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones entre 1 y 40"));
		while(!(habitantes >= 1000000 && habitantes <=40000000 )){
			habitantes = parseInt(prompt("Error,Ingrese la cantidad de habitantes en millones entre 1 y 40 "));}
		
		temperatura = parseInt(prompt("Ingrese la temperatura entre -50 y 50"));
		while(!(temperatura >= -50 && temperatura <= 50)){
			temperatura = parseInt(prompt("Error, ingrese una temperatura entre -50 y 50"))}
		
		if(temperatura %2 == 0){
			tempPar++;}

		if(habitantes < habMenor || i == 0){
			habMenor = habitantes;
			localidadMenor = localidad;
			i = 1;}

		if( temperatura > 40){
			cantLocalidades++;}

		acumHabitantes = acumHabitantes + habitantes;
		promedio = acumHabitantes /habitantes;
		
		if(temperatura < tempMinima){
			tempMinima = temperatura;
			localidadMenor = localidad;
		}
		
		seguir = prompt("Quiere continuar ingresando datos? si/no");

	}while(seguir == "si");

	document.write("La cantidad de temperaturas pares es: " +tempPar + "<br>");
	document.write("El nombre de la localidad con menos habitantes es: " + localidadMenor+ "<br>");
	document.write("La cantidad de localidad que superan los 40 grados son: " +cantLocalidades+ "<br>");
	document.write("El promedio de habitantes es: " +promedio+ "<br>");
	document.write("La temperatura minima ingresada es: " +tempMinima+ " Y el nombre de su localidad es: " +localidadMenor+ "<br>");
}

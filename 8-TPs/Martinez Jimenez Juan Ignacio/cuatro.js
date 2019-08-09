function mostrar()
{
	var letra;
	var numero;
	var seguir;
	var par = 0;
	var impar = 0;
	var acumNumero = 0;
	var ceros = 0; 
	var positivos = 0; 
	var negativos = 0;
	var numMaximo = 0;
	var numMinimo = 0;
	var letraMaxima; 
	var letraMinima; 	
	var prom =0;


	do{
		letra = prompt("Ingrese una letra");
	
		numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
		while( isNaN(numero) || numero < -100 || numero > 100){
			numero = parseInt(prompt("Error, reingrese un numero entre -100 y 100"));}

		acumNumero = acumNumero + numero;

		if(numero % 2 == 0){
			par++;
		} else {
			impar++}
		
		if(numero > 0 ){
			prom++;
			positivos++;
		}
		if(numero < 0){
			negativos++;
		} else {
			ceros++;
		}

		if(numero < numMinimo){
			numMinimo = numero;
			letraMinima = letra; }
		
		if(numero > numMaximo){
			numMaximo = numero;
			letraMaxima = letra;
		}
	

		seguir = prompt("Desea continuar? si/no");

	}while(seguir == "si");

	document.write("La cantidad de numeros pares es: " +par+ "<br>");
	document.write("La cantidad de numeros impares es: " +impar+ "<br>");
	document.write("La cantidad de ceros es: " +ceros+ "<br>");
	document.write("La suma de los numeros negativos es: " +negativos+ "<br>");
	document.write("El promedio de los numeros postiivos es: " +prom+ "<br>");
	document.write("El numero minimo es: " +numMinimo+ " y su letra es: " +letraMinima+ "<br>");
	document.write("El numero maximo es: " +numMaximo+ " y su letra es: " +letraMaxima+ "<br>");

}

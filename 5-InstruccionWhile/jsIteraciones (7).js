function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir  = "s";
	var numero;

	do{
		numero = prompt("Ingrese un numero");
		seguir = prompt("Quiere ingresar otro numero?");

		numero = parseInt(numero);
		while(isNaN(numero)){
			alert("No es un numero");
			break;
			
		}
		
		acumulador = acumulador + numero;
		contador = contador +1;

	


	}while(seguir =="s")

	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
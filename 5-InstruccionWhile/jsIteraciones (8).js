function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var seguir='si';

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numero)){ 
			alert("No es un numero"); }
		
		if(numero <0){
		negativo= negativo*numero ;}
		else{
			positivo=positivo + numero;
		}

		contador++;
		seguir = prompt("Quiere ingresar otro numero?");
	}while(seguir == "si")


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
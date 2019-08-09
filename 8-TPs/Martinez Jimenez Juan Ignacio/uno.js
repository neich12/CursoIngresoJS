
function mostrar()
{
	var lado1;
	var lado2;
	var lado3;
	var trianguloEquilatero;
	var trianguloEscaleno;
	var ladosIguales;
	var perimetro;
	
	lado1 = parseInt(prompt("Ingrese la medida del primero lado del triangulo "));
	if(isNaN(lado1)){
		lado1 = parseInt(prompt("Error,Ingrese la medida del primero lado del triangulo "));}

	lado2 = parseInt(prompt("Ingrese la medida del segundo lado del triangulo "));
	if(isNaN(lado2)){
		lado2 = parseInt(prompt("Error,Ingrese la medida del segundo lado del triangulo "));}

	lado3 = parseInt(prompt("Ingrese la medida del tercer lado del triangulo "));
	if(isNaN(lado3)){
		lado3 = parseInt(prompt("Error,Ingrese la medida del tercer lado del triangulo "));}
	
		
	
	if(lado1 == lado2 && lado2 == lado3){
		alert("Su triangulo es Equilatero y El perimetro es: " +lado1 * lado2 * lado3)} else{
			alert("Su triangulo es Escaleno y Los lados concatenados son: " + lado1 + lado2 + lado3);
		}
		
	
}
	
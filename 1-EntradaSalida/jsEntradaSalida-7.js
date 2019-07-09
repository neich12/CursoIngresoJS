/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numerouno;
    var numerodos;
    var suma;

    numerouno = document.getElementById("numeroUno").value;
    var numerouno = parseInt(numerouno);
    numerodos = document.getElementById("numeroDos").value;
    var numerodos = parseInt(numerodos);

    var suma = (numerouno + numerodos);

    alert("La suma es: " + suma);

	
}

function restar()
{   
    var numerouno;
    var numerodos;
    var resta;

    numerouno = document.getElementById("numeroUno").value;
    numerouno = parseInt(numerouno);
    numerodos = document.getElementById("numeroDos").value;
    numerodos = parseInt(numerodos);

    var resta = (numerouno - numerodos);

    alert("La resta es: " +resta);
	
}

function multiplicar()
{   
    var numerouno;
    var numerodos;
    var multiplicar;

    numerouno = document.getElementById("numeroUno").value;
    numerouno = parseInt(numerouno);
    numerodos = document.getElementById("numeroDos").value;
    numerodos = parseInt(numerodos);

    var multiplicar = (numerouno * numerodos);

    alert("La multiplicacion es: " +multiplicar);
	
}

function dividir()
{
    var numerouno;
    var numerodos;
    var dividir;

    numerouno = document.getElementById("numeroUno").value;
    numerouno = parseInt(numerouno);
    numerodos = document.getElementById("numeroDos").value;
    numerodos = parseInt(numerodos);

    var dividir = (numerouno / numerodos);
    
    alert("La division es: " +dividir);
	
}


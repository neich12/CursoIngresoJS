/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
    var numerouno;
    var numerodos;
    var suma;

    numerouno = document.getElementById("numeroUno").value;
    var numerouno = parseInt(numerouno);
    numerodos = document.getElementById("numeroDos").value;
    var numerodos = parseInt(numerodos);
    var suma =(numerouno + numerodos);
    alert("La suma es: " + suma);

    

}


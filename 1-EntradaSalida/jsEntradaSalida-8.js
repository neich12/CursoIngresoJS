/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numerodividendo;
    var numerodivisor;
    var resto;

    numerodividendo = document.getElementById("numeroDividendo").value;
    numerodividendo = parseInt(numerodividendo);
    numerodivisor = document.getElementById("numeroDivisor").value;
    numerodivisor = parseInt(numerodivisor);
     
    var resto = (numerodividendo % numerodivisor);
    
    alert("El resto es: " +resto);

}

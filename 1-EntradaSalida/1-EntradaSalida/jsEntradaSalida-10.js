/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var Importe;
    var Resultado;
     
    Importe = document.getElementById("importe").value;
    Importe = parseInt(Importe);
 
    var Resultado = Importe - (Importe * 0.25 ); 
    document.getElementById("resultado").value = Resultado;
    
}



//git clone para bajar las carpetas de github 


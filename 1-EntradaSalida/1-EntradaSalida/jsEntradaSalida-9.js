/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   var Importe;
   var Resultado;
    
   Importe = document.getElementById("sueldo").value;
   Importe = parseInt(Importe);

   var Resultado = (Importe * 19 / 100 + Importe); 
   document.getElementById("resultado").value = Resultado;

    
}

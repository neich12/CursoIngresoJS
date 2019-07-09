/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numerosueldo;
    var aumento;
    var numeroresultado;
    var resto;

    numerosueldo = document.getElementById("sueldo").value;
    numerosueldo = parseInt(numerosueldo);
    var numeroresultado = document.getElementById("resultado").value;
    var numeroresultado = parseInt(numeroresultado);
    //alert("lasumaes: " +numerosueldo) EJEMPLO DE ALERT

    var resto = (aumento = 10%)
    var resultado = (numerosueldo * aumento);
  


	
}

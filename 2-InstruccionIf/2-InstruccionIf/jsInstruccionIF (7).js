function mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;


    
    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

{   // if(edad <18&& estadocivil !="Soltero") (ESTA ES OTRA FORMA DE HACERLO UTILIZANDO LOS OPERADORES)
    if(edad <= 18)
    if(estadocivil != "Soltero")
  //  if(estadocivil = "Divorciado") ESTA MAL. PARA QUE DE HAY QUE USAR SIGNO DESIGUAL 
    //if(estadocivil !== "Soltero")
  
{
    alert("Es muy pequeño para NO ser soltero");
}    
}    


	


}//FIN DE LA FUNCIÓN
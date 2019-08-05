function mostrar()
{
    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var promedio;
    var notaBaja;
    var sexoBajo;
    var contadorVaronesMayor = 0;
    //var contador = 0;  LO PONGO CUANDO NO SE CUANTAS VECES SE VAN A PEDIR LAS NOTAS. EN ESTE CASO SE QUE SON 5 VECES.

    for(var i = 0; i < 5; i++){

        
        nota = parseInt(prompt("Ingrese nota 0-10: "));
        /*while( !(nota >= 0 && nota <= 10) ){ //mientras no sea valida la nota
            nota= parseInt(prompt("Error, reingrese nota del 0-10"));}*/

        while(nota < 0 || nota > 10 ||  isNaN(nota)){
        nota= parseInt(prompt("Error reingrese nota valida"));} /*SEGUNDA FORMA DE HACERLO*/
        
        //YA TENGO LA NOTA VALIDADA HASTA ACÁ

        sexo = prompt("Ingrese un sexo: f o m")//.toLowerCase(); Pasar de mayuscula  a minuscula.
        while(!(sexo == "f" || sexo == "m" || sexo == "M" || sexo == "F")){ //Mientras el sexo no sea valido
        sexo= prompt("Ingrese un sexo correcto")/*.toLowerCase();*/}
        
        /*OTRA FORMA DE HACERLO:
        
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("Reingrese un sexo nuevamente");
        }*/

        acumuladorNotas = acumuladorNotas + nota;

        if( nota < notaBaja || i==0){
            notaBaja = nota;
            sexoBajo = sexo;}
        
        if ( sexo == "m" && nota >= 6){
            contadorVaronesMayor++;}
        }

        promedio = acumuladorNotas / 5;
        //alert("El promedio de la nota es: " + promedio / 5);
        document.write("Promedio: " + promedio + "<br>");
        document.write("Nota Baja: " + notaBaja + " Sexo : " + sexoBajo + "<br>");
        
        document.write("Cantidad de varones con notas mayores a 6: " + contadorVaronesMayor + "<br>");


    }








    
    
    
    /*
    var nota;
    var sexo;
    contador = 0;
    var contadorNota = 0;
    var acumulador = 0;
    var sexoMinimo;
    var minimo;


    while (contador < 5) {   // notas y sexo de 5 alumnos
        
        contador ++;

        nota = prompt("Ingrese la nota");
        if (nota < 0 && nota > 10) {

            prompt("Ingrese una nota entre 1 y 10");
        }
        

        

        sexo = prompt("Ingrese el sexo");
        if (sexo != "f" && sexo != "m") {

            prompt("Ingrese un sexo correcto");
        }
    }

    alert("El promedio de la nota es: " + nota / 100);
   
    if(contador == 0){
        minimo = nota;
        maximo = nota;
        sexo;
        //alert("La nota minima es: " +nota+ "Y el sexo de la persona es: " +sexo);
    }

    if(minimo = nota){
        nota = minimo; 
        sexo;
        alert("La nota minima es: " +nota+ "Y el sexo de la persona es: " +sexo);
    }

    
}

*/







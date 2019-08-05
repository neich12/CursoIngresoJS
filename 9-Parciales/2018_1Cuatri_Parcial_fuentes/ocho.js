function mostrar()
{
    var letra;
    var numero; 
    var seguir;
    var contador = 0; 
    var acumuladorPositivos = 0;
    var contadorPositivos = 0; 
    var acumNeg = 0; 
    var mayor
    var menor;
    var letraMayor;
    var letraMenor;
    var flag= 0;
    var contadorPares = 0 ;
    var contadorImpares = 0 ;  
    var contadorCeros = 0;
    var promedio = 0; 
    var acumPos = 0;

    do{ 
        numero = parseInt(prompt ("Ingrese un numero entre -100 y 100"));
        
        while(!(numero >= -100 && numero <= 100 )){
            numero = prompt("Ingrese un numero correcto")}


        letra = prompt("Ingrese una letra");

        while(!(isNaN(letra))){
            letra= prompt("Reingrese una letra correcta");
        }   
        seguir= prompt("Quiere ingresar otro numero/letra ?");


        acumuladorNotas = acumuladorNotas + numero;
        numero = acumuladorNotas;
        
        if( numero % 2 == 0){

            contadorPares++;
    
        }else {
            contadorImpares++;}
        if(numero > 0 ){
                acumuladorPositivos = acumuladorPositivos + numero;
                contadorPositivos++;}
        else if(numero < 0){
    
            acumNeg= acumNeg +numero; 
        } else {
    
            contadorCeros++;}
    
        if(numero > mayor || flag == 0){
            mayor = numero;
            letraMayor = letra;}
    
        if(numero < menor || flag == 0){
            menor = numero;
            letraMenor = letra; 
            flag= 1;}


    }while(seguir == "s"); // while(confirm)

    if(contadorPositivos != 0){
    promedio = acumPos/ contadorPositivos;}
    
    document.write("a La cantidad de numeros pares: " +contPares + "<br>");
    document.write("a La cantidad de numeros impares: " + contadorImpares + "<br>");
    document.write("a La cantidad de ceros: " +contadorCeros + "<br>");
    document.write("El promedio es: " +promedio+ "<br>");
    document.write("a La cantidad de numeros negativos es:  " +acumNeg + "<br>");
    document.write("El numero mayor es: " +mayor+ "La letra mayor es: " +letraMayor + "<br>");


    }
/*
    if(numero < numerosNegativos )


    if(numero % 2 == 1){
        alert("Los numeros impares son: " +numero); 
    } 
   */
/*
    if(numero == numeroMinimo){
        numeroMinimo= numero;
        letraMinima = letra;
    }
    alert("La nota Minima es: " + numeroMinimo + "La letra minima es: " +letraMinima);
*/















/*USO DEL CONFIRM
{

    do{
        
        alert("Hola que tal");  

    }while(confirm("quiere que lo salude de nuevo?"));


}
*/

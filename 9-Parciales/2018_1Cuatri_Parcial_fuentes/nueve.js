function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var par = 0;
    var acumTemperatura = 0;
    var mayorPeso = 0;
    var flag = 0;
    var menorA0 = 0;
    var promedio = 0;
    
    var pesoMinimo = 0;


    do{
        marca = prompt("Ingrese la marca del producto");

        peso = parseInt(prompt("Ingrese el peso del producto entre 1 y 100"));

        if(isNaN (peso) || peso < 1 || peso > 100 ){
            peso = parseInt(prompt("Error, reingrese un peso correcto entre 1 y 100"));}
        
        temperatura = parseInt(prompt("Ingrese la temperatura entre -30 y 30"));

        if(isNaN (temperatura) || temperatura < -30 || temperatura > 30){
            temperatura = parseInt(prompt("Error, reingrese una temperatura entre -30 y 30"));}
        
        seguir = prompt("Quiere continuar ingresando productos? si/no"); 
        
        acumTemperatura = acumTemperatura + temperatura;

        if(temperatura % 2 == 0){
            par++;}
        
        if(peso > mayorPeso || flag == 0){
            mayorPeso = peso;
            marca++;;}
        if(peso < pesoMinimo || flag == 0){
            pesoMinimo = peso;
            flag = 1;}
        
        if(temperatura < 0){
            menorA0++;
        }
        
        promedio = peso/temperatura;

        

    }while(seguir == "si");

    document.write("Las temperaturas pares son: " +par+ "<br>");
    document.write("El producto mas pesado es: " +marca+ "<br>");
    document.write("productos a menos de 0 grados : " +menorA0+ "<br>");
    document.write("El promedio es: " +promedio+ "<br>");
    document.write("El peso maximo es; " +mayorPeso+ "<br>" + "El peso minimo es: " +pesoMinimo+ "<br>");
}   

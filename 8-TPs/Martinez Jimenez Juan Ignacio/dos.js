function mostrar()
{
  var mascota;
  var tipo;
  var edad;
  var peso;
  var nombre;
  var i = 0;
  var acumPeso = 0;
  var edadMayor = 0;
  var cantAnimal = 0;
  var nombreMayor;
 

  for(i == 0; i < 4; i++){

    tipo = prompt("Ingrese si su mascota es ´perro´ o ´gato´");

    (!(tipo == "perro" || tipo == "gato")){
      tipo = prompt("Error, reingrese si su mascota es ´perro´ o ´gato´");}

    edad = parseInt(prompt("Ingrese una edad entre 1 y 25 "));
    if(!(edad >= 1 && edad <= 25 )){
      edad = parseInt(prompt("Error, reingrese una edad correcta entre 1 y 25"));}

    peso = parseInt(prompt("Ingrese un peso entre 1 y 100"));
    if(!(peso >= 1 && peso <= 100)){
      peso = parseInt(prompt("Error, reingrese un peso correcto entre 1 y 100"));}

    nombre = prompt("Ingrese el nombre de su mascota");

    acumPeso = acumPeso+peso;
    promedio = acumPeso/4;
    

    if(edad > edadMayor && tipo == "perro" ){
      edadMayor = edad;
      nombreMayor = nombre;}
    
    if(edad > 10 && peso < 10){
      cantAnimal++;}    
   
    }
    alert("El promedio de los pesos totales es: " +promedio);
    alert("La edad del perro mas viejo es: " +nombreMayor);
    alert("La cantidad de animales menores a 10 kilos de mas de 10 años: " +cantAnimal);

}


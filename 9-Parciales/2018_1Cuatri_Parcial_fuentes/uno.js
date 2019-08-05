
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    perimetro = parseInt(perimetro);

    ancho = prompt("Ingrese el ancho del rectangulo");
    largo = prompt("Ingrese el largo del rectangulo");

    perimetro = ((ancho*2)+(largo*2));
    alert("La medida del rectangulo es: " +perimetro );



}

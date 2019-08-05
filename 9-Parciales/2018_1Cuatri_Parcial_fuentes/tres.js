function mostrar()
{
    var precio = prompt("Ingrese el precio");
    var descuento= prompt("Ingrese el descuento");
    var suma;

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    suma = (precio -precio*descuento /100);

    document.getElementById("elPrecioFinal").value = suma;

    
}

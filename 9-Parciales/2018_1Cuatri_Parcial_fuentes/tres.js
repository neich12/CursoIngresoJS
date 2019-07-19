function mostrar()
{
    var preciofinal;
    var descuento;


    preciofinal = parseInt(preciofinal);

    descuento = parseInt(descuento);

    preciofinal = prompt("Ingrese el precio Final: ");
    descuento = prompt("Ingrese el porcentaje de descuento: ");

    descuento =  preciofinal - (preciofinal * descuento);
    document.getElementById("elPrecioFinal").value = preciofinal
   

    
}

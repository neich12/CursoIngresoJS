function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
{
    switch (mesDelAño)   {
        case("Abril"):
        case("Junio"):
        case("Septiembre"):
        case("Noviembre"):

        {alert("Este mes tiene 30 dias");}
        break;
    }
}	
{
    switch(mesDelAño)   {
        case("Enero"):
        case("Marzo"):
        case("Mayo"):
        case("Julio"):
        case("Agosto"):
        case("Octubre"):
        case("Diciembre"):

        {alert("Este mes tiene 31 dias");}
        break;
    }
}
{
    switch(mesDelAño)   {
        case("Febrero"):
        {alert("Este mes tiene 29 dias");}
        break;

        default: //ESTO ES POR LOS QUE NO ENTRAN EN NINGUN CASE y siempre tiene que ir último
    }
}
	



}//FIN DE LA FUNCIÓN
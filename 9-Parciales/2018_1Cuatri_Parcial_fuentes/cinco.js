function mostrar()
{
    
    var sistemaSolar;
    var mensaje;
    
    
    sistemaSolar = prompt("Ingrese un planeta");
    
    switch(sistemaSolar) {
    
        case "mercurio":
        case "venus":
        {mensaje ="Aca hace mas calor"};
        break;
        
        
        case "tierra":
        {mensaje="Aca vivimos"};
        break; 
        
        
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
        {mensaje="Aca hace mas frio"};
          
        
        default:
        {mensaje="No es un planeta"}
    
        
    }
        {alert (mensaje=mensaje);}

}

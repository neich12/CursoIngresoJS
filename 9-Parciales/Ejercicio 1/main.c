#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    char letra;
    int seguir;
    int par = 0;
    int impar = 0;
    int ceros ;
    int positivos = 0;
    int negativos = 0;
    int numeroMax;
    int numeroMin;
    int letraMax;
    int letraMinM;
    int acumPositivos=0;
    int acumNegativos =0;

    do{
        printf("Ingrese una letra: %c");

        printf("Ingrese un numero: ");
        scanf("%d", &numero);

        while(!(numero > -100 || numero < 100)){
            printf("El numero ingresado es incorrecto, Ingrese un numero correcto");
            scanf("%d", &numero);
        }

        acumPositivos +=numero;
        prom = acumPositivos;
        if(numero > 0){
            positivos = numero;
            prom++;
        } else{
        negativos++;}

        if(numero%2 == 0){
            par++;

        }
        if(!(numero%2 == 0){
           impar++;} else{
           ceros++;}

        if(numero < numeroMax){
            numeroMax = numero;
        } else{
        numeroMin++;}


        printf("Ingrese si o no para continuar ingresando datos: %s ", seguir);
    }while(seguir=="si");

    printf("La cantidad de numeros pares es: %d", par);
    printf("La cantidad de numeros impares es: %d", impar);
    printf("La cantidad de ceroes es: %d", ceros);
    printf("El promedio es: %d", prom);
    printf("La suma de los numeros negativos ingresados es: %d", negativos);

    return 0;
}






/*
{

    int numero;
    float prom;
    int acum = 0;


    for(int i = 0; i < 5; i ++){
        printf("Ingrese un numero: ");
        scanf("%d", &numero);

        acum = acum+numero;
    }
    prom = (float)acum/5.0;
    printf("La suma de los numeros es %d y el promedio es %.2f/n", acum,prom);

    return 0;
}*/

/*
{
    int numero;
    char nombre[29];

    printf("Ingrese su nombre: ");
    gets(nombre);

    printf("Ingrese su edad: ");
    fflush(stdin);
    scanf("%d", &numero);

    printf("Usted se llama %s Y tiene %d anios", nombre, numero);

    return 0;

}*/





/*
{
    int numero;

    printf("Ingrese un numero: ");
    scanf("%d", &numero);


    printf("Usted ingreso el numero %d\n " ,numero);

    return 0;

}*/







    /*int numero = 2019;
    int numero2 = 21;
    char letra = 'A';
    char nombre[20] = "Juan";
    float precio = 123.75;


    printf("Estamos en el anio %d y el dia de hoy es %c\n", numero, letra);
    printf("Su nombre es %s\n", nombre);
    printf("El precio es %.2f", precio);

    return 0;*/


//Calcula el factorial de un número.

//El usuario ingresa un número para sacar su factorial.
let numeroIngresado = parseInt(prompt("Ingresa un número para sacar su factorial."));
//Se define una variable con el valor del número ingresado menos 1. 
//Esto se hace para susituirlo en la fórmula del factorial, en la sección de (n-1).
let factorial = numeroIngresado - 1;
//Se ejecuta el código primero y luego se evalúa la condición.
do{
    //Se realizará la operación del número ingresado por el valor del factorial cada ciclo, 
    //cambiando el valor del factorial cada bucle.
    numeroIngresado *= factorial;
    //El factorial decrementa cada ciclo hasta que llegue a 1.
    factorial --;
    //La consola imprime el factorial del número ingresado.
    console.log(numeroIngresado);
//Se repite el ciclo hasta que ya no cumpla la condición.
}while (factorial >= 1);

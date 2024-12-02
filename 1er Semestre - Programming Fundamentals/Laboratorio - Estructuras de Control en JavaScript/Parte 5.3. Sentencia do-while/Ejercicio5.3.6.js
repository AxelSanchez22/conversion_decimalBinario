//Imprime la tabla de multiplicar del 8.

//Se define una variable con el valor de 1.
let numero = 1;
//Se ejecuta el código primero y luego se evalúa la condición.
do{
    //La consola imprime la concatenación de la variable con los elementos string y el resultado del valor de la variable por 8.
    console.log(numero + " x " + "8 " + "= " + (numero * 8));
    //La variable va a ir incrementando por cada ciclo que haga.
    numero ++;
//Se repite el ciclo hasta que ya no cumpla la condición.
}while (numero <= 12);
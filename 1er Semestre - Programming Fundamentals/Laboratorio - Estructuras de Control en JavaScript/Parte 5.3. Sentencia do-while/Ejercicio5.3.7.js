//Suma los primeros 10 números.

//Se define una variable con el valor de 1.
let numero = 1;
//Se define otra variable con el valor de 0.
let suma = 0;
//Se ejecuta el código primero y luego se evalúa la condición.
do{
    //se realizará la suma de la variable suma y la variable numero, 
    //A la suma se le estará sumando el valor que tenga la variable número.
    suma += numero;
    //La variable va a ir incrementando por cada ciclo que haga.
    numero ++;
    //La consola imprime las sumas de las variables.
    console.log(suma);
//Se repite el ciclo hasta que ya no cumpla la condición.
}while (numero <= 10);
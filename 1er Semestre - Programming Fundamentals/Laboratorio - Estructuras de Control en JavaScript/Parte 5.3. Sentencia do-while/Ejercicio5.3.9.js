//Cuenta cuántos números entre 1 y 30 son divisibles por 3.

//Se define una variable con el valor de 3.
let numero = 3;
do{
    //La consola imprimirá el número.
    console.log(numero);
    //Por cada ciclo, el valor de la variable se irá incrementando por 3.
    //Esto se hace ya que cada número que se le incrementa 3, es divisible por 3.
    numero += 3;
//Se repite el ciclo hasta que ya no cumpla la condición.
}while (numero <= 30);
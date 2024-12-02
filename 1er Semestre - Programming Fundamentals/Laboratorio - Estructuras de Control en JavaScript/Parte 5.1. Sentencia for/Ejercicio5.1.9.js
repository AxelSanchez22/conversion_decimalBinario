//Imprime los primeros 10 términos de la serie de Fibonacci.

//Se define un array en una constante, y estos dos números (0 y 1) servirán como números bases para empezar con el algoritmo.
const Fibonacci = [0,1];
/*Empezaremos con el tercer número de la serie de fibonacci. 
Si "i" es menor a 10, su valor irá incrementando por cada ciclo que dé el bucle.*/
for (let i = 2; i < 10; i++){
    /*Se realizará la operación en donde toma los primeros dos números del array y los suma, 
    el resultado se suma con el número anterior, y así lo realizará por 8 ciclos, 
    ya que en 8 ciclos se suman los primeros 10 números de la serie de fibonacci.*/
    Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];
    //La consola imprime la serie.
    console.log(Fibonacci);
}
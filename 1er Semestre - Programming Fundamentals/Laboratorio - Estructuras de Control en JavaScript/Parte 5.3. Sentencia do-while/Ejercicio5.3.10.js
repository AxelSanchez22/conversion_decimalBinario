//Encuentra el primer número divisible por 9 después de 50.

//Se define una variable inicial con el valor de 50. Desde el 50 es que se va a empezar a incrementar cada ciclo.
let numeroDivisible = 50;
do{
    numeroDivisible++;
////Mientras el número sea divisible entre 9 y el resultado del modulo sea 0, se irá repitiendo el ciclo.
}while(numeroDivisible % 9 !== 0);
/*La consola mostrará el primer valor que sea false (donde la variable entre el módulo de 9 dé 0, 
en este caso, 54 es el primer número que al dividir entre 9, el módulo muestra que es false, ya que !== muestra false.)*/
console.log(numeroDivisible);
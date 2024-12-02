//Encuentra el primer número divisible por 7 después de 100.

//Se define una variable inicial con el valor de 100. Desde el 100 es que se va a empezar a incrementar cada ciclo.
let numeroDivisible = 100;
//Mientras el número sea divisible entre 7 y el resultado del modulo sea 0, se irá incrementando el valor de la variable
while(numeroDivisible % 7 !== 0){
    numeroDivisible++;
}  
/*La consola mostrará el primer valor que sea false (donde la variable entre el módulo de 7 dé 0, 
en este caso, 105 es el primer número que al dividir entre 5, el módulo muestra que es false, ya que !== muestra false.)*/
console.log(numeroDivisible);
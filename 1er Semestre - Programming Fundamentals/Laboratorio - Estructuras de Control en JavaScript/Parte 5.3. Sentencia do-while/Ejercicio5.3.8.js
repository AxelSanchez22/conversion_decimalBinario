//Imprime los primeros 10 términos de la serie Fibonacci.

//Se define una constante que no va a cambiar con un array de 0 y 1, 
//esto será las posiciones de los números para las operaciones que se usará.
const fibonacci = [0,1];
//Se define una variable con el valor de 2. Esto se hace porque en la serie de fibonacci, 
//el 2 es otro término, asi que nos salvamos un número al empezar ahí.
let numero = 2;
do{
    //Se realizará la operación en donde se toma el array de la constante y se le ingresa la variable. 
    //Esto será igual al número que está en la segunda posición [1] y se le sumará el valor del número 
    //que está en la primera posición [0]. Esto lo hará cada ciclo tomando en cuenta
    //que se cambia el valor de la variable ya que cada ciclo se le incrementa.
    fibonacci[numero] = fibonacci[numero-1] + fibonacci[numero-2];
    //Se imprime los términos de la serie de fibonacci que están cada ciclo.
    console.log(fibonacci);
    //Se incrementa la variable por uno cada ciclo hasta llegar al 10.
    numero ++;
//Se repite el ciclo hasta que ya no cumpla la condición.
}while(numero < 10);

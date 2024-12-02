//Calcula el factorial de un número.

//El usuario ingresa un número para sacar su factorial.
let numeroIngresado = parseInt(prompt("Ingresa cualquier número."));
//"i" es el número ingresado menos 1. El bucle se realizará si la inicialización sigue siendo mayor o igual a uno y 
//si "i" cumple con la condición, el valor que tenga "i" por cada bucle se irá decrementando hasta que llegue a 1.
for (let i = numeroIngresado - 1; i >= 1; i--) {
    //Se multiplica el número ingresado por el valor del decremento de "i".
    numeroIngresado *= i;
    //Se imprime el valor que carga el número ingresado y se le multiplica el valor que tiene "i".
    console.log(numeroIngresado);
}

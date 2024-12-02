//Determina si un número es positivo, negativo o cero.

let numeroIngresado = prompt("Ingresa cualquier número.");
//Si el número ingresado es 0, la consola mostrará que es un número cero.
if (numeroIngresado == 0){
    //La consola muestra si un número es cero.
    console.log(`El número ingresado es un número cero.`);
//Si el número ingresado es mayor que cero pero no es cero, la consola mostrará que es un número positivo.
}else if (numeroIngresado > 0){
    //La consola muestra si un número es un número positivo.
    console.log(`El número ${numeroIngresado} es un número positivo.`);
//Si el número ingresado es menor que cero, la consola mostrará que es un número positivo.
}else{
    //La consola muestra si un número es un número negativo.
    console.log(`El número ${numeroIngresado} es un número negativo.`);
}
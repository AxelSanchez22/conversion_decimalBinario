//Determina si un número es positivo o negativo.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado es mayor o igual a 0,
if (numeroIngresado >=0){
    //la consola mostrará que el numero ingresado es un número positivo.
    console.log(`El número ${numeroIngresado} es un número positivo.`);
}else{
    //Si el número ingresado es menor que 0, la consola mostrará que el número ingresado es un número negativo.
    console.log(`El número ${numeroIngresado} es un número negativo.`);
}
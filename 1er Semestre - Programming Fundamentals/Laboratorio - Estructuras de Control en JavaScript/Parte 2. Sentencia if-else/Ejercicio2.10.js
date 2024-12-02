//Comprueba si un número es múltiplo de 5.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado se divide entre 5 y no tiene residuo,
if(numeroIngresado % 5 == 0){
    //La consola mostrará que el número ingresado es un múltiplo de 5
    console.log(`El número ${numeroIngresado} es un múltiplo de 5.`);
}else{
    //Si el número ingresado se divide entre 5 y tiene residuo, la consola mostrará que el número ingresado no es un múltiplo de 5.
    console.log(`El número ${numeroIngresado} no es un múltiplo de 5.`);
}
//Verifica si un número es múltiplo de 2, 3 o ninguno.

let numeroIngresado = prompt("Ingresa cualquier número.");
//Si el número ingresado se divide por 2 y por 3, y ambos resultados tienen residuos, 
if (numeroIngresado % 2 == 1 && numeroIngresado % 3 == 1){
    //la consola mostrará que el número ingresado no es múltiplo de 2 o 3.
    console.log(`El número ${numeroIngresado} no es múltiplo de 2 o 3.`);
//Si el número ingresado se divide por 2 y no tiene residuo,
}else if (numeroIngresado % 2 == 0){
    //la consola mostrará que el número ingresado es divisible por 2.
    console.log(`El número ${numeroIngresado} es múltiplo de 2.`);
//Si el número ingresado se divide por 3 y no tiene residuo,
}else if(numeroIngresado % 3 == 0){
    //la consola mostrará que el número ingresado es divisible por 3.
    console.log(`El número ${numeroIngresado} es múltiplo de 3.`);
}else{
    //Si el número ingresado no es divisible por 2 ni por 3, que no cumple ambas condiciones, 
    //la consola mostrará que el número ingresado no es divisible por 2 ni por 3.
    console.log(`El número ${numeroIngresado} no es múltiplo de 2 o 3.`);
}
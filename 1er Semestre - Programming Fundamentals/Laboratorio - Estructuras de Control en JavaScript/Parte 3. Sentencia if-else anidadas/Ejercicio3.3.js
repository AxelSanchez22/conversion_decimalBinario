//Verifica si un número es divisible por 2, 3 o ambos.

let numeroIngresado = prompt("Ingresa cualquier número.");
//Si el número ingresado es divisible por 2 y por 3, cumpliendo ambas condiciones, 
if (numeroIngresado % 2 == 0 && numeroIngresado % 3 == 0){
    //la consola mostrará que el número ingresado es divisible por 2 y por 3.
    console.log(`El número ${numeroIngresado} es divisible por 2 y por 3.`);
//Si el número ingresado se divide por 2 y no tiene residuo,
}else if (numeroIngresado % 2 == 0){
    //la consola mostrará que el número ingresado es divisible por 2.
    console.log(`El número ${numeroIngresado} es divisible por 2.`);
//Si el número ingresado se divide por 3 y no tiene residuo,
}else if(numeroIngresado % 3 == 0){
    //la consola mostrará que el número ingresado es divisible por 3.
    console.log(`El número ${numeroIngresado} es divisible por 3.`);
}else{
    //Si el número ingresado no es divisible por 2 ni por 3, que no cumple ambas condiciones, la consola mostrará que el número ingresado no es divisible por 2 ni por 3.
    console.log(`El número ${numeroIngresado} no es divisible por 2 ni por 3.`)
}
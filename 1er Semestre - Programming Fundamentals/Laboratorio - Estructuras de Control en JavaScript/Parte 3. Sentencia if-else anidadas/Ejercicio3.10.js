//Determina si un número es positivo y divisible por 5.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado es mayor a 0 y cuando se divide entre 5 no tiene residuos,
if(numeroIngresado > 0 && numeroIngresado % 5 == 0){
    //la consola mostrará que el número ingresado es positivo y es divisible por 5.
    console.log(`El número ${numeroIngresado} es positivo y es divisible por 5.`);
//Si el número ingresado es menor que 0 y cuando se divide entre 5 no tiene residuos,
}else if (numeroIngresado < 0 && numeroIngresado % 5 == 0){
    //la consola mostrará que el número ingresado es negativo y es divisible por 5.
    console.log(`El número ${numeroIngresado} es negativo y es divisible por 5.`);
//Si el número ingresado es mayor a 0 y cuando se divide entre 5 y tiene residuos,
}else if (numeroIngresado > 0 && numeroIngresado % 5 == 1){
    //la consola mostrará que el número ingresado es positivo y es divisible por 5.
    console.log(`El número ${numeroIngresado} es positivo y no es divisible por 5.`);
}else{
    //Si el número ingresado es menor que 0 y cuando se divide entre 5 tiene residuos,
    //la consola mostrará que el número ingresado es negativo y es no divisible por 5.
    console.log(`El número ${numeroIngresado} es negativo y no es divisible por 5.`);
}

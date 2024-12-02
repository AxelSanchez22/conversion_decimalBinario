//Verifica si un número es divisible por 5.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si al número ingresado, se divide en 5 y no tiene residuo,
if (numeroIngresado % 5 == 0){
    //La consola mostrará que es un número divisible entre 5.
    console.log(`${numeroIngresado} es un número divisible por 5.`);
}

//Si el número ingresado se divide entre 5 y su división tiene residuo, la consola no mostrará nada. 
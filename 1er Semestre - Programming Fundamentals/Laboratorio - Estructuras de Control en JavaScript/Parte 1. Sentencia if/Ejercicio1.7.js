//Verifica si un número es múltiplo de 3.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado se divide en 3 y su residuo es cero, 
if (numeroIngresado % 3 == 0){
    //la consola mostrará que el número ingresado es múltiplo de 3.
    console.log(`El número ${numeroIngresado} es un multiplo de 3.`);
}

//Si el número ingresado se divide en 3 y el residuo es 1, la consola no mostrará nada. 
//Comprueba si un número es impar.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado se divide en dos y el residuo es 1,
if (numeroIngresado % 2 == 1){
    //la consola mostrará que el número ingresado es impar.
    console.log(`El número ${numeroIngresado} es un número impar.`);
}

//Si el número ingresado se divide en dos y el residuo es 0, la consola no mostrará nada.
//Verifica si un número es par o impar.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Se ingresa cualquier número y ese número se divide entre 2, si la división del número no da residuo,
if (numeroIngresado % 2 == 0){
    //la consola mostrará que es un número par.
    console.log(`El número ${numeroIngresado} es un número par.`);
}else{
    //Si el número se divide en dos y la división tiene residuo, la consola mostrará que el número es impar. 
    console.log(`El número ${numeroIngresado} es un número impar.`);
}

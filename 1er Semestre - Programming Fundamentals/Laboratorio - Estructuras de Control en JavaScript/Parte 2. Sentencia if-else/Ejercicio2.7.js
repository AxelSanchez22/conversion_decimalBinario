//Verifica si un número es divisible por 2 o por 3.

let numeroIngresado = prompt ("Ingresa cualquier número.");
//Si el número ingresado en la consola es un número que se puede dividir entre 2 o se puede dividir entre 3,
if (numeroIngresado % 2 == 0 || numeroIngresado % 3 == 0){
    //La consola mostrará que es un número que se puede dividir entre 2 o entre 3.
    console.log(`El número ${numeroIngresado} es divisible por 2 o por 3.`);
}else{
    /*Si el número no se puede dividir entre 2 o entre 3, si no cumple alguna de estas dos condiciones, 
    la consola mostrará que el número ingresado no es divisible por 2 o por 3.*/
    console.log(`El número ${numeroIngresado} no es divisible por 2 o por 3.`);
}

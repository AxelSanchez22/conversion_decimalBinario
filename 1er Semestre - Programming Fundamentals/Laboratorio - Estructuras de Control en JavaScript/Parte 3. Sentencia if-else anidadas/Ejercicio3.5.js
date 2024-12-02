//Determina si una cadena tiene entre 5 y 10 caracteres.

let cadenaIngresada = prompt ("Ingresa cualquier cadena de caracteres.");
//Si los cadena de caracteres ingresados están en el rango de 5 a 10 caracteres,
if (cadenaIngresada.length >= 5 && cadenaIngresada.length <= 10){
    //la consola mostrará que la cadena ingresada tiene entre 5 y 10 caracteres.
    console.log("La cadena ingresada tiene entre 5 y 10 caracteres.");
//Si lo cadena de caracteres ingresada no está en el rango de 5 o 10 caracteres,
}else if (cadenaIngresada.length < 5 || cadenaIngresada.length > 10){
    //la consola mostrará que la cadena ingresada no está en el rango de 5 a 10 caracteres.
    console.log("La cadena ingresada no está en el rango de 5 a 10 caracteres.");
}else{
    //Si los cadena de caracteres ingresados están en el rango de 5 a 10 caracteres, la consola mostrará que la cadena ingresada tiene entre 5 y 10 caracteres.
    console.log("La cadena ingresada tiene entre 5 y 10 caracteres.");
}
//Verifica si una cadena tiene menos de 10 carácteres.

let cadenaIngresada = prompt ("Ingresa cualquier cadena de caracteres.");
//Si la cadena de carácteres ingresada tiene menos de 10 caracteres,
if (cadenaIngresada.length < 10){
    //la consola mostrará que la cadena tiene menos de 10 caracteres.
    console.log(`La cadena ${cadenaIngresada} tiene menos de 10 caracteres.`);
}else{
    //Si la cadena ingresada tiene 10 o más carácteres, la consola mostrará que la cadena tiene más de 10 caracteres.
    console.log(`La cadena ${cadenaIngresada} tiene más de 10 caracteres.`);
}
//Verifica si una cadena comienza con la letra "A".

let cadenaIngresada = prompt ("Ingresa los carácteres que quieras.");
//Si el primer carácter ingresado de la cadena empieza con el carácter "A",
if (cadenaIngresada.startsWith("A")){
    //la consola mostrará que la cadena ingresada comienza con la letra "A"
    console.log(`La cadena ingresada comienza con la letra "A."`);
}

//Si el primer carácter ingresado no empieza con la letra "A", aunque empieze con "a", la consola no mostrará nada.
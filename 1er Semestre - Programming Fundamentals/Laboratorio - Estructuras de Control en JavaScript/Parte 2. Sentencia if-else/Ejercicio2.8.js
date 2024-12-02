//Comprueba si una letra es vocal o consonante.

let letraIngresada = prompt ("Ingresa cualquier letra del alfabeto.");
//Si la letra ingresada es cualquier vocal, sea en mayúscula o minúscula,
if (letraIngresada.startsWith("A") || letraIngresada.startsWith("a") || letraIngresada.startsWith("E") ||
    letraIngresada.startsWith("e") || letraIngresada.startsWith("I") || letraIngresada.startsWith("i") ||
    letraIngresada.startsWith("O") || letraIngresada.startsWith("o") || letraIngresada.startsWith("U") ||
    letraIngresada.startsWith("u")){
    //la consola mostrará que le letra ingresada es una vocal.
    console.log(`La letra ${letraIngresada} es una vocal.`);
}else{
    //Si la letra ingresada es una consonante, sea en mayúscula o minúscula, la consola mostrará que es una consonante.
    console.log(`La letra ${letraIngresada} es una consonante.`);
}

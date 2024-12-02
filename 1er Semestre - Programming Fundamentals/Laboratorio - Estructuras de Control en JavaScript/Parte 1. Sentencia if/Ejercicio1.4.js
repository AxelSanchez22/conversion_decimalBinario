//Comprueba si un año es bisiesto.

let añoBisiesto = prompt ("Ingresa el año a saber si es bisiesto.");
//El año ingresado debe de cumplir con una de las 3 condiciones: El año es divisible entre 4, entre 100 o entre 400.
if (añoBisiesto % 4 == 0 || añoBisiesto % 100 == 0 || añoBisiesto % 400 == 0){
    //Si el año cumple cualquiera de las condiciones, la consola muestra que es un año bisiesto.
    console.log(`El año ${añoBisiesto} es un año bisiesto.`);
}

//Si el años no cumple con cualquiera de las 3 condiciones, la consola no muestra nada.

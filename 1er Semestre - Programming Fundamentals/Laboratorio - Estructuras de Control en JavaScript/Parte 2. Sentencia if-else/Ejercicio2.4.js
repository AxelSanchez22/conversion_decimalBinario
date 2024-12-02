//Determina si un año es bisiesto o no.

let añoBisiestoIngresado = prompt ("Ingresa el año a saber si es bisiesto.");
//El año ingresado debe de cumplir con una de las 3 condiciones: El año es divisible entre 4, entre 100 o entre 400.
if (añoBisiestoIngresado % 4 == 0 || añoBisiestoIngresado % 100 == 0 || añoBisiestoIngresado % 400 == 0){
    //Si el año cumple cualquiera de las condiciones, la consola muestra que es un año bisiesto.
    console.log(`El año ${añoBisiestoIngresado} es un año bisiesto.`);
}else{
    //Si el año ingresado no cumple con cualquiera de las condiciones, la consola mostrará que no es un año bisiesto.
    console.log(`El año ${añoBisiestoIngresado} no es bisiesto.`)
}
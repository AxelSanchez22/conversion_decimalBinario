//Verifica si una persona puede votar, conducir o ambas.

let edadIngresada = prompt("Ingresa la edad de la persona.");
//Si la edad ingresada de la persona es menor que 18,
if (edadIngresada < 18){
    //la consola mostrará que la persona no puede votar ni conducir.
    console.log("La persona no puede votar ni conducir.");
//Si la edad ingresada de la persona es igual o mayor que 18,
}else if (edadIngresada >= 18){
    //la consola mostrará que la persona puede votar y conducir.
    console.log("La persona puede votar y conducir.");
}else{
    //Si la edad ingresada de la persona no es mayor o iagual a 18, la consola mostrará que la persona no puede votar ni conducir.
    console.log("La persona no puede votar ni conducir.");
}
//Verifica el estado de una batería (bajo, medio, alto).

let bateriaIngresada = prompt("¿Cúanta batería tiene tu dispositivo?");
//Si la número ingresado es mayor a 100,
if (bateriaIngresada > 100){
    //la consola mostrará que la batería tiene carga.
    console.log("Tu batería tiene carga.")
//Si el número ingresado está en el rango de 71 a 100,
}else if(bateriaIngresada <= 100 && bateriaIngresada >= 71){
    //la consola mostrará que la batería es alto.
    console.log("El estado de la batería es alto.");
//Si el número ingresado está en el rango de 31 a 70,
}else if (bateriaIngresada <= 70 && bateriaIngresada >= 31){
    //la consola mostrará que la batería es medio.
    console.log("El estado de la batería es medio.");
//Si el número ingresado está en el rango de 1 a 31,
}else if (bateriaIngresada <= 30 && bateriaIngresada >= 1){
    //la consola mostrará que la batería es bajo.
    console.log("El estado de la batería es bajo.");
}else{
    //Si el número ingresado es menor o igual a 0, la consola mostrará que ya no tiene carga la batería.
    console.log("Ya no tiene carga la batería.");
}
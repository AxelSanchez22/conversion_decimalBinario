/*Realiza un programa que solicite al usuario su edad y dependiendo de su respuesta, indique si puede votar.
Luego, usa un ciclo for para imprimir los años que le faltan hasta la edad de retiro (65 años).*/

/*Se define una variable en donde el usuario le asigna el valor, en este caso, la edad. */
let edadIngresada = parseInt(prompt("Ingresa la edad de la persona."));
/*Si el número ingresado por el usuario es mayor o igual a 18, */
if (edadIngresada >= 18){
    /*la consola mostrará que la persona puede votar. */
    console.log("La persona puede votar.")
}else{
    /*Si el número ingresado por el usuario es menor que 18, la consola mostrará que la persona no puede votar.*/
    console.log("La persona no puede votar.");
}

/*Si el número ingresado por el usuario es menor o igual a 65, */
if (edadIngresada <= 65){
    /*la consola mostrará los años restantes para su retiro.*/
    console.log("Le faltan estos años para su retiro: ");
    /*Se hace un bucle en donde: cuando el usuario ingresa su edad, 
    la consola mostrará todos los números hasta llegar al 65, saltándose por 1 el número inicial. 
    Estos números son los años que le faltan para su retiro*/
    for(let i = edadIngresada + 1; i <= 65; i++){
        /*La consola mostrará todos los números en secuencia del número ingresado más 1 hasta el 65.*/
        console.log(i);
    }
}else{
    /*Si el número ingresado es mayor a 65, la consola mostrará que la persona puede retirarse. */
    console.log("La persona puede retirarse.");
}
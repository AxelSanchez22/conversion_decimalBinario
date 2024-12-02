//Verifica si una persona puede votar (mayor o igual a 18 años).

let edadIngresada = prompt ("Ingresa la edad de la persona.");
//Si la edad ingresada es mayor o igual que 18,
if (edadIngresada >= 18){
    //la consola mostrará que la persona puede votar.
    console.log("La persona puede votar.");
}else{
    //Si la edad ingresada de la persona es menor que 18, la consola mostrará que la persona no puede votar
    console.log("La persona no puede votar.");
}
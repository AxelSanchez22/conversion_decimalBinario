//Verifica si una persona es adolescente (entre 13 y 19 años).

let edadIngresada = prompt ("Ingresa la edad de la persona.");
//Si la edad ingresada de la persona es mayor o igual a 13 y también es menor o igual a 19,
if (edadIngresada >= 13 && edadIngresada <=19){
    //la consola mostrará que la persona es adolescente.
    console.log("La persona es adolescente.");
}else{
    //Si la edad ingresada de la persona es menor que 13 y mayor que 19, la consola mostrará que la persona no es adolescente.
    console.log("La persona no es adolescente.");
}
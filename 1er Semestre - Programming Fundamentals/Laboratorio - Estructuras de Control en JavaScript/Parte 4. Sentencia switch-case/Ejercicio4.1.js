//Determina el día de la semana a partir de un número.

//El usuario debe ingresar cualquier número del 1 al 7
let diaIngresado = parseInt(prompt("Ingresa un número para determinar un día de la semana."));
//Si el número ingresado coincide con cualquier case, la consola mostrará el día a la cual el número está asignado.
switch (diaIngresado){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Día no válido.");
}

//Verifica si una letra es vocal (solo considera minúsculas).

let letraIngresada = prompt ("Ingresa cualquier letra del alfabeto (en minúsculas).");
//Si la letra en minúscula ingresada por el usuario es "a", "e","i", "o" o "u", la consola mostrará que es una vocal.
switch (letraIngresada) {
    case "a":
        console.log(`La letra "a" es un vocal`);
        break;
    case "e":
        console.log(`La letra "e" es un vocal`);
        break;
    case "i":
        console.log(`La letra "i" es un vocal`);
        break;
    case "o":
        console.log(`La letra "o" es un vocal`);
        break;
    case "u":
        console.log(`La letra "u" es un vocal`);
        break;
    default:
        /*Si la letra en minúscula ingresada por el usuario no es "a", "e","i", "o" o "u", 
        la consola mostrará que la letra ingresada es inválida.*/
        console.log(`La letra ${letraIngresada} es inválida.`);
        break;
}
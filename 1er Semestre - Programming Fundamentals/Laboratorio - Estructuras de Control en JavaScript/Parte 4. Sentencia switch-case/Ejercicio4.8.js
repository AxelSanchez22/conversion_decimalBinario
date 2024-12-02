//Convierte un número del 1 al 5 en su nombre en inglés.

let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 5."));
//El usuario ingresa cualquier número del 1 al 5.
switch (numeroIngresado) {
    //Si el número ingresado por el usuario es 1, la consola mostrará que el "1" en ingles es: one.
    case 1:
        console.log(`El "1" en inglés es: one.`);
        break;
    //Si el número ingresado por el usuario es 2, la consola mostrará que el "2" en ingles es: two.
    case 2:
        console.log(`El "2" en inglés es: two.`);
        break;
    //Si el número ingresado por el usuario es 3, la consola mostrará que el "3" en ingles es: three.
    case 3:
        console.log(`El "3" en inglés es: three.`);
        break;
    //Si el número ingresado por el usuario es 4, la consola mostrará que el "4" en ingles es: four.
    case 4:
        console.log(`El "4" en inglés es: four.`);
        break;
    //Si el número ingresado por el usuario es 5, la consola mostrará que el "5" en ingles es: five.
    case 5:
        console.log(`El "5" en inglés es: five.`);
        break;
    //Si el usuario ingresa cualquier número que no sea del 1 al 5, la consola mostrará que el número ingresado es inválido.
    default:
        console.log("El número ingresado es inválido.");
        break;
}
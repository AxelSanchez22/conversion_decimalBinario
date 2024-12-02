//Verifica si una cadena es "Hola", "Adiós" o "Desconocido".

let cadenaIngresada = prompt ("Ingresa una cadena.");
//El usuario ingresa cualquier cadena de caracteres
switch (cadenaIngresada) {
    //Si la cadena ingresada es "Hola", la consola mostrará que la cadena ingresada es "Hola"
        case "Hola":
        console.log(`La cadena ingresada es "Hola".`);
        break;
    //Si la cadena ingresada es "Adiós", la consola mostrará que la cadena ingresada es "Adiós"
    case "Adiós":
        console.log(`La cadena ingresada es "Adiós".`);
        break;
    //Si la cadena ingresada es "Desconocido", la consola mostrará que la cadena ingresada es "Desconocido"
    case "Desconocido":
        console.log(`La cadena ingresada es "Desconocido".`);
        break;
    //Si la cadena ingresada no es "Hola" o "Adiós", la consola mostrará que la cadena ingresada es desconocida.
    default:
        console.log("La cadena ingresada es desconocida.");
        break;
}
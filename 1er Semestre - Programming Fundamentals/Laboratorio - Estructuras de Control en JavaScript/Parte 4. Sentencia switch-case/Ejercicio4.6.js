//Determina si una cadena es "Si" o "No".

let cadenaSiNoIngresada = prompt (`Ingresa "Si" o "NO"`);
//El usuario ingresa una cadena "Si" o "No".
switch (cadenaSiNoIngresada) {
    //Si la cadena ingresada es "Si", la consola mostrará que la cadena ingresada es Si.
    case "Si":
        console.log("La cadena ingresada es Si.");
        break;
    //Si la cadena ingresada es "No", la consola mostrará que la cadena ingresada es No.
    case "No":
        console.log("La cadena ingresada es No.");
        break;
    //Si la cadena ingresada no es "Si" o "No", la consola mostrará que la cadena ingresada es inválida.
    default:
        console.log("La cadena ingresada es inválida.");
        break;
}
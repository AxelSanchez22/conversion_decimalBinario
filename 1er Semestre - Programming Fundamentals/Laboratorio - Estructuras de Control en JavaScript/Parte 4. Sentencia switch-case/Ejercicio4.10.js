//Determina el color del semáforo (rojo, amarillo, verde).

let semaforoIngresado = prompt ("Ingrese el semáforo.");
//El ususario ingresa el tipo de usuario que es.
switch (semaforoIngresado) {
    //Si la cadena ingresada es "rojo" o "Rojo", la consola mostrará que el color del semáforo es rojo.
    case "rojo":
    case "Rojo":
        console.log("El color del semáforo es rojo.");
        break;
    //Si la cadena ingresada es "amarillo" o "Amarillo", la consola mostrará que el color del semáforo es amarillo.
    case "amarillo":
    case "Amarillo":
        console.log("El color del semáforo es amarillo.");
        break;
    //Si la cadena ingresada es "verde" o "Verde", la consola mostrará que el color del semáforo es verde.
    case "verde":
    case "Verde":       
        console.log("El color del semáforo es verde.");
        break;
    //Si la cadena ingresada no es cualquiera de los 6 cases, la consola mostrará que el color del semáforo es inválido.
    default:
        console.log("El color del semáforo es inválido.");
        break;
}
//Verifica la estación del año a partir de un mes.

let mesIngresado = prompt ("Ingresa cualquier mes del año.");
//Si el mes ingresado por el usuario es "marzo", "abril" o "mayo", la consola mostrará que la estación del año es primavera.
switch (mesIngresado) {
    case "marzo":       
    case "abril":
    case "mayo":
    case "Marzo":       
    case "Abril":
    case "Mayo":
        console.log("La estación del año es primavera.");
        break;
    //Si el mes ingresado por el usuario es "junio", "julio" o "agosto", la consola mostrará que la estación del año es verano.
    case "junio":
    case "julio":
    case "agosto":
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("La estación del año es verano.");
        break;
    //Si el mes ingresado por el usuario es "septiembre", "octubre" o "noviembre", la consola mostrará que la estación del año es otoño.
    case "septiembre":
    case "octubre":
    case "noviembre":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("La estación del año es otoño.");
        break;
    //Si el mes ingresado por el usuario es "diciembre", "enero" o "febrero", la consola mostrará que la estación del año es invierno.
    case "diciembre":
    case "enero":
    case "febrero":
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("La estación del año es invierno.");
        break;
    default:
        console.log("El mes ingresado es inválido.");
        break;
    //Si el mes ingresado por el usuario no es cualquier de los 24 cases, la consola mostrará que el mes es inválido.
}
//Verifica el tipo de usuario (admin, editor, usuario).

let usuarioIngresado = prompt ("Ingrese el usuario.");
//El ususario ingresa el tipo de usuario que es.
switch (usuarioIngresado) {
    //Si la cadena ingresada es "admin" o "Admin", la consola mostrará que el tipo de usuario es admin.
    case "admin":
    case "Admin":
        console.log("El tipo de usuario es admin.");
        break;
    //Si la cadena ingresada es "editor" o "Editor", la consola mostrará que el tipo de usuario es editor.
    case "editor":
    case "Editor":
        console.log("El tipo de usuario es editor.");
        break;
    //Si la cadena ingresada es "usuario" o "Usuario", la consola mostrará que el tipo de usuario es usuario normal.
    case "usuario":
    case "Usuario":       
        console.log("El tipo de usuario es usuario normal.");
        break;
    //Si la cadena ingresada no es cualquiera de los 6 cases, la consola mostrará que el tipo de usuario es inválido.
    default:
        console.log("El tipo de usuario es inválido.");
        break;
}
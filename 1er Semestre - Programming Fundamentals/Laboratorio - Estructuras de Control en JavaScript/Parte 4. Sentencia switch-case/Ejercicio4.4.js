//Clasifica una nota/calificación en letras (A, B, C, D, F).

let notaIngresada = parseInt(prompt("Ingresa la calificación."));
//Si el número ingresado por el usuario está en el rango de 90 a 100, la consola mostrará que la nota obtenida es A.
switch (notaIngresada) {
    case 100:       
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
        console.log("La nota obtenida es A.");
        break;
    //Si el número ingresado por el usuario está en el rango de 80 a 89, la consola mostrará que la nota obtenida es B.       
    case 89:
    case 88:
    case 87:
    case 86:
    case 85:
    case 84:
    case 83:
    case 82:
    case 81:
    case 80:
        console.log("La nota obtenida es B.");
        break;
    //Si el número ingresado por el usuario está en el rango de 70 a 79, la consola mostrará que la nota obtenida es C.
    case 79:
    case 78:
    case 77:
    case 76:
    case 75:
    case 74:
    case 73:
    case 72:
    case 71:
    case 70:
        console.log("La nota obtenida es C.");
        break;
    //Si el número ingresado por el usuario está en el rango de 60 a 69, la consola mostrará que la nota obtenida es D.
    case 69:
    case 68:
    case 67:
    case 66:
    case 65:
    case 64:
    case 63:
    case 62:
    case 61:
    case 60:
        console.log("La nota obtenida es D.");
        break;
    //Si el número ingresado por el usuario está en el rango de 0 a 59, la consola mostrará que la nota obtenida es F.
    case 59:
    case 58:
    case 57:
    case 56:
    case 55:
    case 54:
    case 53:
    case 52:
    case 51:
    case 50:
    case 49:
    case 48:
    case 47:
    case 46:
    case 45:
    case 44:
    case 43:
    case 42:
    case 41:
    case 40:
    case 39:
    case 38:
    case 37:
    case 36:
    case 35:
    case 34:
    case 33:
    case 32:
    case 31:
    case 30:
    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
    case 23:
    case 22:
    case 21:
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("La nota obtenida es F.");
        break;
    //Si el número ingresado por el usuario no está en el rango de 0 a 100, la consola mostrará que la nota ingresada no es válida.
    default:
        console.log("La nota ingresada no es válida.");
        break;
}
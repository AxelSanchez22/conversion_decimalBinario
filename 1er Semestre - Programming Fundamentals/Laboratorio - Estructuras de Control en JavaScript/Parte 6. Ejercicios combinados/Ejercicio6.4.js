/*Realiza un programa que determine el signo zodiacal basado en el día y mes de nacimiento del usuario
utilizando if-else anidados.*/

/*
Aries: 21 de marzo - 20 de abril
Tauro: 21 de abril - 21 de mayo
Géminis: 22 de mayo - 21 de junio
Cáncer: 22 de junio - 22 de julio
Leo: 23 de julio - 23 de agosto
Virgo: 24 de agosto - 23 de septiembre
Libra: 24 de septiembre - 23 de octubre
Escorpio: 24 de octubre - 22 de noviembre
Sagitario: 23 de noviembre - 21 de diciembre
Capricornio: 22 de diciembre - 20 de enero
Acuario: 21 de enero - 18 de febrero
Piscis: 19 de febrero - 20 de marzo
*/

/*El usuario ingresa número de acuerdo a su mes y dia de nacimiento y se guardan en dos variable. 
Cuando el número coincida con alguna sentencia, evaluará el siguiente número ingresado y determinará el signo zodiacal del usuario*/
let mesIngresado = parseInt(prompt("Ingresa el número del mes en que naciste."));
let díaIngresado = parseInt(prompt("Ingresa el día en que naciste."));

if (mesIngresado === 1) {
    if (díaIngresado <= 20) {
        console.log("Tu signo es Capricornio");
    }else {
        console.log("Tu signo es Acuario");
    }
} else if (mesIngresado === 2) {
    if (díaIngresado <= 18) {
        console.log("Tu signo es Acuario");
    }else {
        console.log("Tu signo es Piscis");
    }
} else if (mesIngresado === 3) {
    if (díaIngresado <= 20) {
        console.log("Tu signo es Piscis");
    }else {
        console.log("Tu signo es Aries");
    }
} else if (mesIngresado === 4) {
    if (díaIngresado <= 20) {
        console.log("Tu signo es Aries");
    }else {
        console.log("Tu signo es Tauro");
    }
} else if (mesIngresado === 5) {
    if (díaIngresado <= 21) {
        console.log("Tu signo es Tauro");
    }else {
        console.log("Tu signo es Géminis");
    }
} else if (mesIngresado === 6) {
    if (díaIngresado <= 21) {
        console.log("Tu signo es Géminis");
    }else {
        console.log("Tu signo es Cáncer");
    }
} else if (mesIngresado === 7) {
    if (díaIngresado <= 22) {
        console.log("Tu signo es Cáncer");
    }else {
        console.log("Tu signo es Leo");
    }
} else if (mesIngresado === 8) {
    if (díaIngresado <= 23) {
        console.log("Tu signo es Leo");
    }else {
        console.log("Tu signo es Virgo");
    }
} else if (mesIngresado === 9) {
    if (díaIngresado <= 23) {
        console.log("Tu signo es Virgo");
    }else {
        console.log("Tu signo es Libra");
    }
} else if (mesIngresado === 10) {
    if (díaIngresado <= 23) {
        console.log("Tu signo es Libra");
    }else {
        console.log("Tu signo es Escorpio");
    }
} else if (mesIngresado === 11) {
    if (díaIngresado <= 22) {
        console.log("Tu signo es Escorpio");
    }else {
        console.log("Tu signo es Sagitario");
    }
} else if (mesIngresado === 12) {
    if (díaIngresado <= 21) {
        console.log("Tu signo es Sagitario");
    }else {
        console.log("Tu signo es Capricornio");
    }
//Si el usuario ingresa un número fuera del 1 al 12, la consola mostrará que tu signo zodiacal es inváildo.
} else {
    console.log("Tu signo zodiacal es inváildo.");
}

//if
//if-else
//if-else anidados
//switch-case

//A traves de condiciones ayuda a tomar desiciones en el programa

//Sentence if
console.log("CONDICIONES IF")
let edad = 18;
if (edad >= 18){
    console.log("Eres una persona mayor que edad");
}

let numero = 3;
if (numero > 0){
    console.log("El numero es positivo")
}

//if-else
console.log("CONDICIONES IF-ELSE")
let numero1 = -3
if (numero1 > 0){
    //codigo si la condición es verdadera
    console.log("El numero es positivo")
}else{
    //codigo si la condición es false  
    console.log("El numero es negativo")
}

let temperatura = 25;
if(temperatura > 30){
    console.log("Hace calor")
}else{
    console.log("Clima fresco")
}

//if-else anidada
console.log("CONDICIONES IF-ELSE ANIDADAS")
let nota = 50;
if(nota >= 90){
    console.log("Excelente")
}else if(nota >= 70){
    console.log("Pasó")
}else{
    console.log("Reprobó")
}

let nota1 = 100;
if(nota1 >= 100){
    console.log("Excelente")
}else if(nota1 >= 90){
    console.log("Muy bueno")
}else if(nota1 >=80){
    console.log("Bueno")
}else if(nota1 >= 70){
    console.log("Pasó")
}else{
    console.log("Reprobó")
}

//switch-case
console.log("CONDICIONES SWITCH-CASE")
let dia = 7;
switch (dia){
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
        console.log("Día no válido")
}

let fruta = "axel sanchez valdez"
switch (fruta) {
    case "banana":
        console.log("El precio de la banana es de: $5")
        break;
    case "pera":
        console.log("El precio de la pera es de: $7")
        break;
    case "sandia":
        console.log("El precio de la sandia es de: $20")
        break;
    case "manzana":
        console.log("El precio de la manzana es de: $15")
        break;
    case "uva":
        console.log("El precio de la uva es de: $2")
        break;
    default:
        console.log(`La ${fruta} no está en las opciones`)
        break;
}

//alt + 96 = backtick  (`)
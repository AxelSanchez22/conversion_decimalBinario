//Estructuras de control
//Existen 3 tipos que ayudan a automatizar
// for
// while
// do - while

/*
for (bucle)
for(inialización; condicion; incremento/decremento){
}
*/

//let suma = 0;
//for(let i = 1; i <=10; i++){
//    suma += i;
//   console.log(`Iteración número: ${i} la suma es: ${suma}`);
//}

let suma1 = 0;
let numero1 = prompt("Ingresa un número a sumar")
for(let i = 1; i <= numero1; i++){
    suma1 += i;
    console.log(`Iteración número: ${i} la suma es: ${suma1}`);
}
console.log("Ya no cumple la condición y salimos");

//         Ejercicio
//let number = prompt("Enter any number");
//if (number > 0){
//    console.log("The number entered is positive");
//}else if(number < 0){
//    console.log("The number entered is negative");
//}else if(number = 0){
//    console.log("The number entered is zero");
//
//}if(number % 2 ==0){
//    console.log("The number entered is an even number");
//}else{
//    console.log("Then number entered is an odd number")
//}

/*
while(condicion)
{
    bloque de codigo mientras la condicion es verdadera
}
*/

let contador = 1;
while(contador <= 5){
    console.log("El contador es " + contador);
    contador ++;
}
console.log("Ya no cumple la condición en while y salimos");

//Ejercico
console.log("WHILE")
let tabla = 1;
let numero = prompt("Ingresa un número")
while (tabla <= 10){
    console.log(numero + " x " + tabla + " = " + tabla*numero);
    tabla ++;
}
console.log("Fin de la tabla");

//do while
/*
console.log("DO WHILE");
do{
    codigo a ejecutar
}while(condicion);
*/

let numerodo = 1;
do{
    console.log("Numero: " + numerodo);
    num++;
}while(numerodo <= 5);


let numero2 = 1;
do{
    console.log("Valor del numero: " + numero2);
    num2--;
}while(numero2 > 2);
console.log("Fin del ciclo do while");


//Números primos de un rango
let inicio = parseInt(prompt("Ingresa el número del inicio del rango: "));
let fin = parseInt(prompt("Ingresa el número del fin del rango: "));

for(let inicio = i; i <= fin; i++){
   let esPrimo = true;

    if(i <= 1) continue; 

   for(let j = 2; j <= Math.sqrt(i); j++){
      if(i % j === 0){
      esPrimo = false;
      break;
      }
   }
   if(esPrimo){
    console.log(i + " es un número primo");
   }

}

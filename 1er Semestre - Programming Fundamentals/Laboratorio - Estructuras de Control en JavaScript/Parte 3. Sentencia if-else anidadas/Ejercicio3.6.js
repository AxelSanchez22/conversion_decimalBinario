//Verifica si un número está entre 0 y 50, entre 51 y 100, o más de 100.

let numeroIngresado= prompt ("Ingresa cualquier número.");
//Si el número ingresado es mayor o igual a 0 y menor o igual a 50, cumpliendo ambas condiciones, 
if (numeroIngresado >= 0 && numeroIngresado <= 50){
    //la consola mostrará que el número ingresado entá entre 0 y 50.
    console.log(`El número ${numeroIngresado} está entre 0 y 50.`);
//Si el número ingresado es mayor o igual a 51 y menor o igual a 100, cumpliendo ambas condiciones,
}else if (numeroIngresado >= 51 && numeroIngresado <= 100){
    //la consola mostrará que el número ingresado entá entre 51 y 100.
    console.log(`El número ${numeroIngresado} está entre 51 y 100.`);
//Si el número ingresado es mayor que 100,
}else if (numeroIngresado > 100){
    //la consola mostrará que el número ingresado es mayor 100.
    console.log(`El número ${numeroIngresado} es más de 100.`);
}else{
    //Si el número ingresado es menor que 0, la consola mostrará que el número ingresado es menor 0. 
    //Esto lo hace porque en las líneas anteriores ya se especificaron lo que mostrará la consola
    //cuando un número ingresado cumpla alguna condición.
    console.log(`El número ${numeroIngresado} es un número menor que 0.`);
}

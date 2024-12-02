//Definición de variables
let n = 0;
let suma = 0;
let n1 = 0;
let suma1 = 0;

//Do while
console.log("CONDICIÓN DO WHILE");
do{
    suma = suma + n;
    n++;
    console.log(suma);
}while(n <= 10);

//While
console.log("CONDICIÓN WHILE");
while(n1 <= 10){
    console.log(suma1);
    suma1 += n1;
    n1++;
}

console.log(`
x|o|x
-----
o|x|o
-----
o|x|o
    `);
let x= 5;
let y= 3;

let resultado = x + y; //expresión aritmética

//operadores de asignación
//asignación =
//Operadores combinados +=, -=, *=, /=, %=

let x2 = 10;
x2 += 5; //x ahora es 15
//x2 = x2 + 5;
//x2 = 10 + 5;
//x2 = 15

x -= 3; //x ahora es 12

//Operadores aritméticos
//Suma(+), Resta(-), Multiplicación(*), División(/), Modulo(%
//Incremtento (++) y Decremento (--)

let a = 10;
let b = 3;

let suma = a + b; //Resultado de 13
let modulo = a % b; //Resultado: 1 (resto de la división)

a++; //ahora vale 11
b--; //ahora vale 2

//Operadores relacionales
//Operadores; == (comparación), != (desigualdad), >, <, >=, <=
//Comparar 2 valores y devuelven true o false

let c = 10;
let d = 5;
console.log(c>d); //true
console.log(c==d); //false

//Operadores lógicos
//Operadores: && (AND), || (OR), | (NOT)
//Se usan para combinar expresiones lógicas

let e = true;
let f = false;

console.log(e && f); //false (AND) para que se cumplan ambas deben de ser true, si una es false, la expresión es false
console.log(e || f); //true (OR) para que se cumpla alguna de las dos debe ser true, toda la expresion es true, si todas son false por consecuencia toda se vuelve false.
console.log(!e); //false (NOT) 

//Prioridad de los operadores
//Orden de prioridad
//Aritméticos > relacionales > lógicos > asignación

let g = 5 + 3 * 2 ; //g será 11 (primero se evalúa la multiplicacíon (* ,> / ,> + ,> -) )
let h = (5 + 3) * 2; //h será 16, primero se evalúa la suma que está entre parentesis
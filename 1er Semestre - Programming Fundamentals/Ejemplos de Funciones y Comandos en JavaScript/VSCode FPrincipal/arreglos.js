/*Arreglo o array
Estructuras de datos que permiten almacenar múltiples valores en una sola variable
En el arreglo puedo acceder a cada uno de los valores y además puedo recorrerlos*/

/*Hay dos formas de crear un arreglo en JS
La primera usando corchetes [] */

let numeros = [1,2,3,4,5];

/*Usando el constructor Array() Vectorial*/ 
//Arreglos vecroriales: Solo van de manera horizontal los vectores

//Indice =             0           1          2
let frutas = new Array("manzanas", "bananas", "naranjas");

//El array más común en JS es usar los corchetes

//Posición = 1 2 3 4 5
//Ejemplo   [1,2,3,4,5]
//Indice =   0 1 2 3 4

//Para usar el elemento del array, hay que usar el índice.

//Modificar los elementos de un arreglo
let fruta = ["manzanas", "bananas", "naranjas"];
fruta[1] = "uvas";
console.log(fruta);

//Propiedad .length de arreglos
console.log(fruta.length);

//Agregar un elemento al final de un arreglo: push()
fruta.push("sandías");
fruta.push("melon");
fruta.push("kiwi");
console.log(fruta);

//Eliminar el ultimo elemento de un arreglo: pop()
fruta.pop();
fruta.pop();
console.log(fruta);

//Eliminar el primer elemento de un arreglo: shift()
fruta.shift();
console.log(fruta);

//Agregar un elemento al principio de un arreglo: unshift()
fruta.unshift("Guayaba");
console.log(fruta);

//Eliminar un elemneto específico de un arreglo: splice()
//.splice(index, cantidad, elemento)
//uasado para gargar elemento en cualquier posición del arreglo
fruta.splice(1, 0, "Limón");
console.log(fruta);

//splice(): usado para eliminar elementos de un arreglo
fruta.splice(4, 1);
console.log(fruta);

//Recorer elementos en un arreglo usando la sentencia for
for(let i = 0; i < fruta.length; i++){
    console.log(fruta[i]);
}
console.log("fin de for");


//metodos modernos para recorrer arreglos
//forEach(): Ejecuta una función para cada elemento del arreglo
fruta.forEach(function(f){
    console.log(f);
});
console.log("fin forEach");

//metodo alterno de recorrer arreglos
//map(): crea un nuevo arreglo con los resultados de aplicar una función a cada clase

let fruta2 = fruta.map(function(f){
    return f + "2";
});

console.log(fruta2);

//ARREGLOS MULTIDIMENSIONALES: un areglo que contiene otros arreglos como elementos
//Matrices: porque son utiles para representar datos en tablas o matrices.

//Regularmente se habla de arreglos bidimensionales

/*Usando la estructura de un arreglo normal
let matriz = [1,2,3]; */

let matriz = [
//Fila    0,1,2 > Columna
/*0*/    [1,2,3],
/*1*/    [4,5,6],
/*2*/    [7,8,9]
];

//matriz = [1][2]; // Nos arroja el número 6
//Esto lo hace porque el 1 es el indice de la fila, y el 2 esel indice de la columna
console.log(matriz[0][1]); //Arroja el número 2
console.log(matriz[2][2]); //Arroja el número 9

//Recorrer un arreglo multidimensional
// Ciclo para las filas
for(let i = 0; i < matriz.length; i++){
    //Ciclo para las columnas
    for(let j = 0; j < matriz[i].length; j++)
    console.log(matriz[i][j]);
}
console.log("fin de for");

//Modificar elementos de un arreglo bidimensional
//Cambiar el elemento 6
matriz[1][2] = 10;
console.log(matriz);

//Arreglos MULTIDIMENSIONALES con más de 2 dimensiones
let cubo = [
    [//Primer nivel
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [//Segundo nivel
        [10,11,12],
        [13,14,15],
        [16,17,18]
    ]
];
//Cómo acceder a un elemento en el segundo nivelfila1 columna 2
console.log(cubo[1][1][2]); //Arroja el 15

//Recorrer un arreglo de 3 dimensiones
for(let i = 0; i < cubo.length; i++){
    //Ciclo para las columnas
    for(let j = 0; j < cubo[i].length; j++){
        for(let k = 0; k < cubo[i][j].length; k++)
        console.log(cubo[i][j][k]);
}
}

console.log("fin de for");

//Usos comunes de arreglos multidimensionales
/*
Son útiles en varias situaciones, más que nada cuando se requieres representar datos en forma de tablas o 
matrices o cualquier estructura que tenga más de una dimensión.
Tabla de datos:
-Matrices matemáticas
-Juegos de tableros
-Matrices 3D en gráficos computacionales
*/

//Ejemplo de ejercicio
/*Crear un arregloo que contenga 5 nombres y luego podamos imprimir cada nombre de la consola*/

//Crear un arreglo de 5 nombres
let alumnos = ["Axel", "Samuel", "Sindy", "Jair", "Itiel"];
//Recorrido de alumnos e imprimir cada nombre
alumnos.forEach(function(alumno){
    console.log(alumno);
});

//Dado un arreglo de números, calcula el promedio de esos números
let lista = [6,8,4,3,5];
let promedio = (6+8+4+3+5) / lista.length;
console.log(promedio);

let suma = 0;
for(let i = 0; i < lista.length; i++){
    suma += lista[i]
}
//Calcular el promedio dividiendo la suma entre el número de elementos
let promedioLista = suma / lista.length;
console.log(promedioLista);
console.log(`El promedio de la lista es: ${promedioLista}`);

//Dado un arreglo, invertir el orden de los elementos y muestrenlos
//Forma 1
console.log("Forma 1");
let arreglo = [1,2,3,4,5];
let resta = 4;
for(let i = 4; i > 0; i--){
}
console.log(arreglo)

//Forma 2
console.log("Forma 2");
for(let i = arreglo.length; i > 0; i--){
    console.log(i)
}

//Forma 3
console.log("Forma 3");
let arregloInvertido = arreglo.reverse();
console.log(arregloInvertido);


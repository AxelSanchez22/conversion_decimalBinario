//Suma los primeros 10 números.

//Asignamos un valor a la suma.
let suma = 0;
/*El bucle irá incrementando el número cada vez empezando desde el 1.
Esto lo hará hasta llegar al 10, ya que hasta ahí está perimitido que incremente.*/ 
for (let i = 1; i <= 10; i++) {
    /*Se sumará el valor de "i" con el valor de la suma por el operando +=, y esto lo hará 10 veces,
    ya que, por la condición, sumará los primeros 10 números.*/
    suma += i;
    //La consola va a imprimir la suma.
    console.log(suma);
}

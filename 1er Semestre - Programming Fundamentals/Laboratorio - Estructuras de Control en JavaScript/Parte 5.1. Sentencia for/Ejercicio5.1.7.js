//Imprime la tabla de multiplicar del 5.

/*El bucle irá decrementando el número cada vez emepzando desde el 0. 
Esto lo hará hasta llegar al 10, ya que hasta ahí está perimitido que incremente. */
for (let i = 0; i <= 12; i++) {
    /*La consola mostrará la concatenación, tomando en cuenta el valor que tiene "i" cada ciclo que tenga, y por cada ciclo,
    "i" aumenta por uno y se irá multiplicando por 5 y su resultado igual se mostrará en la concatenación.*/
    console.log(i + " x " + "5" + " = " + (i*5));
}
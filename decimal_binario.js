//Definimos una variable vacía en donde se estará agregando unos y ceros.
let Bin = '';
//Pedimos al usuario que ingrese un número decimal para convertir a binario.
let n = parseInt(prompt("Ingresa el número decimal para convertir en binario."));
//Hacemos una condición en donde si el número ingresado es cero, la consola mostrará un 0.
if(n <= 0){
    console.log("El número en binario convertido es: 0");
//Hacemos otra condición si no cumple con la primera.
}else{
    //Mientras el número ingresado sea mayor a cero,
    while (n > 0) {
        /*Se ejecutará una operación en donde se sacará el modulo 2 del número ingresado y se le agregará 
        la variable de la cadena a la que se le estarán agregando los números, y esto se guardará en la misma variable.*/
        Bin = (n % 2) + Bin;
        /*Hacemos una operación/función en donde el resultado del modulo se le hará un redondeo al número 
        hacia abajo hasta el múltiplo entero más cercano. Esto se hace para seguir la lógica de conversiones binarias.*/
        n = Math.floor(n / 2);
    }
    //La consola va a mostrar los números de la conversión realizada.
    console.log(`El número en binario convertido es: ${Bin}`);
}
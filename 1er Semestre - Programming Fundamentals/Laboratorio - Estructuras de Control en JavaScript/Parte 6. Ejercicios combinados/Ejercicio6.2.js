/*Crea un programa que calcule el total a pagar en un restaurante. Elige el tipo de cliente (normal, VIP,
miembro) usando switch y aplica un descuento en base a eso.*/

/*Se define una variable con el costo para pagar que ingresa el usuario. */
let cantidadTotal = parseInt(prompt("Ingresa la cantidad total a pagar."));
/*El usuario ingresa el tipo de cliente. Se le agrega el toLocaleLowerCase() para que 
reconozca las mayúsculas que ingresó el ususario y haga emparejamiento con el caso en el switch case.*/
let tipoCliente = prompt("¿Qué tipo de cliente eres? (Normal, Vip o Miembro)").toLocaleLowerCase();
/*Se defina una variable para usar en la fórmula, ésta se usará para calcular el costo final con el descuento aplicado */
let descuento;

/*Se define 3 casos en donde se aplicará el descuento dependiendo de qué tipo de ciente es. */
switch (tipoCliente) {
    case "normal":
        descuento = 0.15;
        break;
    case "vip":
        descuento = 0.50;
        break;
    case "miembro":
        descuento = 0.30;
        break;
    /*Si el usuario ingresa una cadena en donde no es cualquier de los 3 tipos de cliente, no se le aplicará un descuento. */
    default:
        console.log("Cliente no válido.");
        descuento = 0;
        break;
}

//Se aplicará la fórmula para calcular el costo total ya con el descuento aplicado.
let descuentoAplicado = cantidadTotal - (descuento * cantidadTotal);
//La consola mostrará el costo a pagar.
console.log(`El total a pagar con el descuento aplicado es $${descuentoAplicado}.`);
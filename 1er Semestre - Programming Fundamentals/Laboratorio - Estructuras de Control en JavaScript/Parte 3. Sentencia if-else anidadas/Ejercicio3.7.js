//Verifica si una letra es vocal o consonante, y si es mayúscula o minúscula.

let letraIngresada = prompt("Ingresa cualquier letra del alfabeto.");
//Si la letra ingresada es cualquier vocal en mayúscula
if (letraIngresada.match(/[AEIOU]/)){
    //la consola mostrará que le letra ingresada es una vocal y es mayúscula.
    console.log(`La letra ${letraIngresada} es una vocal y es mayúscula.`);
//Si la letra ingresada es cualquier vocal en minúscula,
}else if (letraIngresada.match(/[aeiou]/)){
    //la consola mostrará que le letra ingresada es una vocal y es minúscula.
    console.log(`La letra ${letraIngresada} es una vocal y es minúscula.`);
//Si la letra ingresada es cualquier consonante en mayúscula
}else if (letraIngresada.match(/[BCDFGHJKLMNÑPQRSTVXZWYZ]/)){
    //la consola mostrará que le letra ingresada es una consonante y es mayúscula.
    console.log(`La letra ${letraIngresada} es una consonante y es mayúscula.`);
//Si la letra ingresada es cualquier vocal en minúscula
}else if (letraIngresada.match(/[bcdfghjklmnñpqrstvwxz]/)){
    //la consola mostrará que le letra ingresada es una consonante y es minúscula.
    console.log(`La letra ${letraIngresada} es una consonante y es minúscula.`);
//Si la letra ingresada no es una letra del alfabeto,
}else{
    //la consola mostrará que le letra ingresada es inválida.
    console.log("La letra ingresada es inválida.");
}
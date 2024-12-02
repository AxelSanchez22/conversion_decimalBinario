//Verifica el estado del clima (frío, templado o caliente).

let centigradosIngresados = prompt ("Ingresa los centígrados.");
//Si los centígrados ingresados son menor o igual a 10,
if (centigradosIngresados <= 10){
    //la consola mostrará que el clima es frío.
    console.log("El clima es frío.");
//Si los centígrados ingresados son menor o igual a 27,
}else if (centigradosIngresados <= 27){
    //la consola mostrará que el clima es templado.
    console.log("El clima es templado.");
}else{
    //Si los centígrados ingresados son mayor a 27, la consola mostrará que el clima es caliente.
    console.log("El clima es caliente.");
}
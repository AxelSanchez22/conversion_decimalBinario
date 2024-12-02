let nombre = "Axel"; //Variable global

function main(){
    saludar();
}

function saludar (){
    let mensaje ="Hola"; //Variable local
    console.log(mensaje + "" + nombre)
}

main();
console.log(mensaje); //Marca error porque mensaje está definida solo localmente y no globalmente
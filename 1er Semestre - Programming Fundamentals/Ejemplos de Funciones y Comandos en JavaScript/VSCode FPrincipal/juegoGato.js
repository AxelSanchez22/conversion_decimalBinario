//Creamos un arreglo bidimensional para representar el tablero
let tablero = [
    ["","",""],
    ["","",""],
    ["","",""]
];

//Función para imprimir el tablero
function imprimirTablero(){
    console.log(`
        0 1 2
    -------------
    0 | ${tablero[0][0]} | ${tablero[0][1]} | ${tablero[0][2]}
    -------------
    1 | ${tablero[1][0]} | ${tablero[1][1]} | ${tablero[1][2]}
    -------------
    2 | ${tablero[2][0]} | ${tablero[2][1]} | ${tablero[2][2]}
    -------------
    
    
    
        `);
}

//Función para verificar si hay un ganador
function verificarGanador(jugador){
    //Verificar filas, columnas y diagonales
    for(let i = 0; i < 3; i++){
        if(tablero[i][0] === jugador && tablero [i][1] === jugador && tablero [i][2] === jugador) return true;
        if(tablero[0][i] === jugador && tablero [1][i] === jugador && tablero [2][i] === jugador) return true;
    }
    if(tablero[0][0] === jugador && tablero [1][1] === jugador && tablero [2][2] === jugador) return true;
    if(tablero[0][2] === jugador && tablero [1][i] === jugador && tablero [2][0] === jugador) return true;

    return false;
}

//Función para verificar si hay un empate
function verificarEmpate(){
    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(tablero[i][j] === ` `) return false;

        }
    }
    return true;
}

//Función principal para jugar el juego
function jugar(){
    let jugadorActual = "x"; //El jugador x empieza
    let juegoTerminado = false;

    while (!juegoTerminado){
        imprimirTablero();
        console.log(`Turno del jugador ${jugadorActual}`);

        //Solicitar la fila y columna al jugador
        let fila = prompt(`Jugador ${jugadorActual}, ingresa la fila (0,1, o 2,x):`);
        let columna = prompt(`Jugador ${jugadorActual}, ingresa la columna (0,1, o 2,x):`);

        //Validar si la posición es válida y está vaciá
        if(tablero[fila][columna] === ` ` && fila >= 0 && fila < 3 && columna >= 0 && columna );
            tablero[fila][columna] = jugadorActual;

            //Verificar si hay un ganador
            if(verificarGanador(jugadorActual)){
            imprimirTablero();
            console.log(`!El jugador ${jugadorActual} ha ganado!`);
            }else if(verificarEmpate()){
            imprimirTablero();
            console.log("Es un empate.");
            juegoTerminado = true;
            }else{
            //Cambiar de jugador
            jugadorActual = jugadorActual === `X` ? `O` ? `X`;
        }else{
            console.log("Movimiento inválido, intente de nuevo");
        }
    }
}
jugar();
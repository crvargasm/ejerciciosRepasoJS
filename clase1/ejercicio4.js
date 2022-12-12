/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function miFuncion(cadena, iterator) {
    if (typeof cadena == "string" && typeof iterator == "number") {
        let salida = "";
        for (let index = 0; index < iterator; index++) {
            salida += cadena + " ";
        }
        return salida;
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return;
    }
}

console.log(miFuncion("Hola Mundo", 4));
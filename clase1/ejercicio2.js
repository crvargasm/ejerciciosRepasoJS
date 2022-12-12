/*2) Programa una función que te devuelva el texto recortado según el número de
 caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function miFuncion(cadena, cropIndex) {
    if (typeof cadena == "string" && typeof cropIndex == "number") {
        if(cropIndex > cadena.length || cropIndex<0){
            return "Upps... el índice está por fuera del rango del String";
        }
        return cadena.substring(0,cropIndex);
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return;
    }
}

console.log(miFuncion("Hola Mundo", 6));
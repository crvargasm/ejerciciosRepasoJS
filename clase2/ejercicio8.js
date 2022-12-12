/*
Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".
*/

function miFuncion(cadena, patron) {
    if (typeof cadena == "string" && typeof patron == "string") {
        return console.log(cadena.replaceAll(patron, ""));;
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return;
    }
}

console.log(miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
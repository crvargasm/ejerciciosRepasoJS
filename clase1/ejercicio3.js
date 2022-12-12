/*
3) Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function miFuncion(cadena, separator) {
    if (typeof cadena == "string" && typeof separator == "string") {
        return cadena.split(separator);
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return;
    }
}

console.log(miFuncion("Enim irure, eiusmod in dolor.", " "));
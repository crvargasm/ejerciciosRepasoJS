/*6) Programa una función para contar el número de veces que se repite una palabra 
en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

function miFuncion(cadena, palabra) {
    if (typeof cadena == "string" && typeof palabra == "string") {
        let re = new RegExp(palabra,"ig");
        return cadena.match(re).length;
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return;
    }
}

console.log(miFuncion("hola mundo adios mundo", "mundo"));
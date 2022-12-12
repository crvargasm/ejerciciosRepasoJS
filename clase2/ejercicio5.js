/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function miFuncion(cadena) {
    if (typeof cadena == "string") {
        let salida = "";

        for (let i = cadena.length-1; i >= 0; i--) {
            salida += cadena[i];
        }

        return salida;
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion("Hola Mundo"));
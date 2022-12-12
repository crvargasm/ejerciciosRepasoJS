/*1) Programa una función que cuente el número de caracteres de una cadena de 
texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function miFuncion(cadena) {
    if (typeof cadena == "string") {
        const longi= cadena.length;
        return `La longitud de la cadena "${cadena}" es de ${longi} caracteres.`;
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion("Hola Mundo"));
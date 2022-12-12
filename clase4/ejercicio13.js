/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.
*/

function miFuncion(numero) {
    if (typeof numero == "number") {
        
        if (numero % 2 ==0 ) {
            return "Par";
        } else {
            return "Impar";
        }

    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(29));
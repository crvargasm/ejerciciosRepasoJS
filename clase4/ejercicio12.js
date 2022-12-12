/*12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
*/

function miFuncion(numero) {
    if (typeof numero == "number") {
        
        for (let i = numero-1; i > 2; i--) {
            if (numero % i == 0) {
                return false;
            };
        }

        return true;
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(9187));
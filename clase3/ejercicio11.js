/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto 
de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) 
devolverá 120.
*/

function miFuncion(numero) {
    if (typeof numero == "number") {
        let sumatoria=1;
        
        for (let i = numero; i > 0; i--) {
            sumatoria*=i;
        }

        return sumatoria;
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(5));
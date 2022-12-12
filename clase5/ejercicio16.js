/*16) Programa una función que devuelva el monto final después de aplicar 
un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

function miFuncion(valor, descuento) {
    if (typeof valor == "number" && typeof descuento == "number") {
        return valor -(valor*descuento/100);
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(1000, 20));
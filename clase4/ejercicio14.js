/*14) Programa una función para convertir grados Celsius a 
Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/

function miFuncion(valor, unidadTemperatura) {
    if (typeof valor == "number" && typeof unidadTemperatura == "string") {
        switch (unidadTemperatura) {
            case "C":
                return ((valor*9/5)+32)+"°F";
            case "F":
                return ((valor-32)*(5/9))+"°C";
            default:
                return "Unidad de Temperatura no Válida";
        }
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(0, "C"));
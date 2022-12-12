/*17) Programa una función que dada una fecha válida determine cuantos 
años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).
*/

function miFuncion(fecha) {
    if (fecha.constructor.name === 'Date') {
        return new Date().getFullYear() - fecha.getFullYear();
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(new Date(1984,4,23)));
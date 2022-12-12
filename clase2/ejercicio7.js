/*
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
*/

function miFuncion(cadena) {
    if (typeof cadena == "string") {
        let f = false;
        for (let i = 0; i < Math.ceil(cadena.length/2); i++) {
            if (cadena[i]==cadena[cadena.length-i-1]) {
                f = true;
            } else{
                f= false;
                break;
            }
        }
        return f;
    } else{
        console.error("Has ingresado un tipo de dato incorrecto.");
        return false;
    }
}

console.log(miFuncion("solos"));
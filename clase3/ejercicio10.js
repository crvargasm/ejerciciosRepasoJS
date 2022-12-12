/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

function miFuncion(cadena) {
    if (typeof cadena == "number") {
        
        cadena = Array.from(String(cadena), num => Number(num));
        
        let f = false;

        for (let i = 0; i < Math.ceil(cadena.length/2); i++) {
            if (cadena[i]==cadena[cadena.length-i-1]) {
                f = true;
            } else{
                console.log(cadena[1]);
                f = false;
                break; 
            }
        }

        return f;
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(2002));
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

function miFuncion() {
    return Math.random() * (600 - 501) + 501;
}

console.log(miFuncion());
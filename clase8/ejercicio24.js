/*24) Programa una función que dado un arreglo de números devuelva un objeto con 
dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el 
segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let ascendente = [];
    let descendiente = [];

    arreglo.sort(function (a, b) {
      return a - b;
    });

    return "{ asc: [" + arreglo + "], desc: [" + arreglo.reverse() + "] }";
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion([7, 5, 7, 8, 6]));

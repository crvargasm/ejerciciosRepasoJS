/*23) Programa una función que dado un array de números devuelva un objeto con 2 
arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < arreglo.length; i++) {
      if (typeof arreglo[i] != "number") {
        return "Has ingresado un tipo de dato incorrecto.";
      }
      if (arreglo[i] % 2 == 0) {
        pares.push(arreglo[i]);
      } else {
        impares.push(arreglo[i]);
      }
    }

    return "{pares: [" + pares + "], impares: [" + impares + "]}";
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

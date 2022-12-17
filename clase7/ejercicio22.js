/*22) Programa una función que dado un array devuelva el número mas alto y el 
más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let salida = [];
    let max = 0;
    let min = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if (typeof arreglo[i] != "number") {
        return "Has ingresado un tipo de dato incorrecto.";
      }
      if (arreglo[i] > max) {
        max = arreglo[i];
      } else if (arreglo[i] < min) {
        min = arreglo[i];
      }
    }
    salida.push(max);
    salida.push(min);
    return salida;
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion([1, 4, 5, 99, -60]));

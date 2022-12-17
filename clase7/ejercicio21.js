/*21) Programa una función que dado un array numérico devuelve otro array con 
los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let salida = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (typeof arreglo[i] != "number") {
        return "Has ingresado un tipo de dato incorrecto.";
      }
      salida.push(Math.pow(arreglo[i], 2));
    }
    return salida;
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion([1, 4, 5]));

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let salida = [];

    for (let i = 0; i < arreglo.length; i++) {
      if (!salida.includes(arreglo[i])) {
        salida.push(arreglo[i]);
      }
    }

    return salida;
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion(["x", 10, "x", 2, "10", 10, true, true]));

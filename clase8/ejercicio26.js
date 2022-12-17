/*26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

function miFuncion(arreglo) {
  if (Array.prototype.isPrototypeOf(arreglo) && arreglo.length > 0) {
    let sumatoria = 0;

    for (let i = 0; i < arreglo.length; i++) {
      sumatoria += arreglo[i];
    }

    return sumatoria / arreglo.length;
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

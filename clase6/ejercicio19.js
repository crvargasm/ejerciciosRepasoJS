/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

function miFuncion(nombre) {
  if (typeof nombre == "string" && nombre.length > 0) {
    let array = nombre.split(" ");

    for (let i = 0; i < array.length; i++) {
      if (array[i][0] != array[i][0].toUpperCase()) {
        return false;
      }
      for (let j = 0; j < array[i].length; j++) {
        if (
          array[i][j].toUpperCase().charCodeAt(0) < 64 ||
          array[i][j].toUpperCase().charCodeAt(0) > 91
        ) {
          return false;
        }
      }
    }

    return true;
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion("Jonathan MirCha"));

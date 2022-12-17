/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

function miFuncion(correo) {
  if (typeof correo == "string" && correo.length > 0) {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(correo);
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion("jonmircha@gmail.com"));

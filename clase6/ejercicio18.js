/*18) Programa una función que dada una cadena de texto cuente el número de vocales 
y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

function miFuncion(cadena) {
  if (typeof cadena == "string") {
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    const vocales = ["a", "e", "i", "o", "u"];
    const consonantes = [
      "q",
      "w",
      "r",
      "t",
      "y",
      "p",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "ñ",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
    ];

    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i].toLowerCase())) {
        contadorVocales++;
      } else if (consonantes.includes(cadena[i].toLowerCase())) {
        contadorConsonantes++;
      }
    }

    return (
      "Vocales: " + contadorVocales + ", Consonantes: " + contadorConsonantes
    );
  } else {
    return "Has ingresado un tipo de dato incorrecto.";
  }
}

console.log(miFuncion("Hola Mundo"));

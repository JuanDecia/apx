/*

  Tenemos un arreglo que representa un mazo, el objetivo es en un arreglo vacío,
  completarlo con un arreglo por cada palo diferente.

*/

const mazoCompleto = [
  "A de ♥️",
  "2 de ♥️",
  "3 de ♥️",
  "4 de ♥️",
  "5 de ♥️",
  "6 de ♥️",
  "7 de ♥️",
  "8 de ♥️",
  "9 de ♥️",
  "10 de ♥️",
  "J de ♥️",
  "Q de ♥️",
  "K de ♥️",
  "A de ♦️",
  "2 de ♦️",
  "3 de ♦️",
  "4 de ♦️",
  "5 de ♦️",
  "6 de ♦️",
  "7 de ♦️",
  "8 de ♦️",
  "9 de ♦️",
  "10 de ♦️",
  "J de ♦️",
  "Q de ♦️",
  "K de ♦️",
  "A de ♣️",
  "2 de ♣️",
  "3 de ♣️",
  "4 de ♣️",
  "5 de ♣️",
  "6 de ♣️",
  "7 de ♣️",
  "8 de ♣️",
  "9 de ♣️",
  "10 de ♣️",
  "J de ♣️",
  "Q de ♣️",
  "K de ♣️",
  "A de ♠️",
  "2 de ♠️",
  "3 de ♠️",
  "4 de ♠️",
  "5 de ♠️",
  "6 de ♠️",
  "7 de ♠️",
  "8 de ♠️",
  "9 de ♠️",
  "10 de ♠️",
  "J de ♠️",
  "Q de ♠️",
  "K de ♠️",
];

// esto nos indica en que orden están las cartas en el mazo completo
const palos = ["corazones", "diamantes", "treboles", "picas"];

let mazo = new Array(52);
let index = 0;

// ####### WHILE #######

const mazoPorPaloWhile = {};

let i = 0;
while (i < palos.length) {
  // Se guarda el valor del indice en la variable, es decir "corazones". .
  const nombreDelPalo = palos[i];

  // Creamos una clave en el objeto para el palo actual
  mazoPorPaloWhile[nombreDelPalo] = [];

  let j = 0;
  while (j < 13) {

    // Se captura la carta correspondiente del palo actual.
    const carta = mazoCompleto[i * 13 + j];

    // 1° Se selecciona el objeto "mazoPorPaloWhile".
    // 2° Se selecciona el arreglo creado en el bucle "i" [nombreDelPalo].
    // 3° Se selecciona la posición del arreglo con el valor del iterador del bucle [j].
    // 4° Se asigna la carta correspondiente del palo actual al indice seleccionado con [j].
    mazoPorPaloWhile[nombreDelPalo][j] = carta + " ";

    j++;
  }

  i++;
}

console.log(mazoPorPaloWhile);
console.log("----------------------------------------");

// ####### FOR #######

const mazoPorPaloFor = {};

for (let i = 0; i < palos.length; i++) {

  // Se guarda el valor del indice en la variable, es decir "corazones". .
  const nombreDelPalo = palos[i];

  // Creamos una clave en el objeto para el palo actual
  mazoPorPaloFor[nombreDelPalo] = [];

  for (let j = 0; j < 13 ; j++) {

    // Se captura la carta correspondiente del palo actual.
    const carta = mazoCompleto[i * 13 + j];
    
    // 1° Se selecciona el objeto "mazoPorPaloWhile".
    // 2° Se selecciona el arreglo creado en el bucle "i" [nombreDelPalo].
    // 3° Se selecciona la posición del arreglo con el valor del iterador del bucle [j].
    // 4° Se asigna la carta correspondiente del palo actual al indice seleccionado con [j].
    mazoPorPaloFor[nombreDelPalo][j] = carta + " ";

  }
}

console.log(mazoPorPaloFor);
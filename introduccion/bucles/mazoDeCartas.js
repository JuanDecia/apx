/* 

  El objetivo es crear un arreglo que represente el mazo de cartas
  del poker. Utiliazr diferentes métodos de bucles.

*/

const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// ####### WHILE #######

// Arreglo para cartas.
const mazoWhile = [];
// Auxiliar para manejar el índice del arreglo.
let auxiliarMazoWhile = 0;

let i = 0;
// Bucle que recorre el arreglo de palos.
while (i < palos.length) {
  // Se guarda el valor de cada posición en una variable.
  const palo = palos[i];

  let j = 0;
  // Arreglo para recorrer los valores.
  while (j < valores.length) {
    // Se guarda el valor de cada posición en una variable
    const valor = valores[j];

    // Se agrega en el arreglo en el índice marcado por el auxiliar una cadena
    // de texto que indica el valor y el palo de cada carta.
    mazoWhile[auxiliarMazoWhile] = `${valor} de ${palo} `;

    // Se aumenta el valor del indice auxiliar para que cada valor ocupe
    // un indice diferente.
    auxiliarMazoWhile++
  
    j++;
  }

  i++;
}

console.log(mazoWhile); // Imprime resultado final
console.log("-------------------------------------");

// ####### FOR #######

// Arreglo para completar el mazo.
const mazoFor = [];

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta
  for ( let j = 0; j < valores.length; j++ ) {
    const valor = valores[j];

    mazoFor.push(`${valor} de ${palo} `);
  };
};

console.log(mazoFor);
console.log("-------------------------------------");

// ####### FOR OF #######

const mazoForOf = [];

for (palo of palos) {
  
  for (valor of valores) {
    mazoForOf.push(`${valor} de ${palo} `);
  }
}

console.log(mazoForOf);


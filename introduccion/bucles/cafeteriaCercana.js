/*

  Se debe recorrer el array de objetos "cafes" con diferentes bucles y métodos
  para encontrar la cafetería más cercana. Dejar un comentario en cada bloque
  para identificar cual es el tipo de bucle que se esté utilizando.

*/

const cafes = [
  {
    name: "Café Aurora",
    products: ["Latte", "Croissant", "Capuchino"],
    distance: 1.2,
  },
  {
    name: "El Rincón del Espresso",
    products: ["Espresso", "Bagel", "Café Mocha"],
    distance: 0.8,
  },
  {
    name: "Java Lounge",
    products: ["Americano", "Té Verde", "Sándwich"],
    distance: 2.5,
  },
  {
    name: "La Taza Feliz",
    products: ["Macchiato", "Muffin", "Frappuccino"],
    distance: 1.8,
  },
  {
    name: "Brewtopia",
    products: ["Cold Brew", "Brownie", "Flat White"],
    distance: 0.5,
  },
  {
    name: "Café Nómada",
    products: ["Café Negro", "Churro", "Matcha Latte"],
    distance: 3.0,
  },
];

// ####### WHILE #######
// En este bloque se utiliza el bucle while para recorrer el array "cafes".

// En esta ocasión com el arreglo está compuesto de objetos, se debe establecer
// el punto de partida. Como se debe recorrer todos,
// se comienza desde la primera posición.

let cafeteriaMasCercana = cafes[0];

// Se establece el contador en 1, ya que la posición 0 ya fue asignada
// a "cafeteriaMasCercana".
let i = 1;

// Bloque While recorre desde el iterador "i" hasta la longitud del array "cafes".
while (i < cafes.length) {
  // Se compara el valor de la variable que se encuentra guardada
  // en "cafeteraMasCercana" con el valor de la cafetería que se está recorriendo

  if (cafes[i].distance < cafeteriaMasCercana.distance) {
    // Si es menor, reemplazar el valor de "cafeteriaMasCercana"
    cafeteriaMasCercana = cafes[i];
  }

  i++;
}

console.log(
  "La cafetería más cercana es:",
  cafeteriaMasCercana.name,
  "a",
  cafeteriaMasCercana.distance,
  "km."
);

console.log("-----------------------------------");

// ####### FOR #######
// Bloque con bucle for

for (let i = 1; i < cafes.length; i++) {
  if (cafes[i].distance < cafeteriaMasCercana.distance) {
    cafeteriaMasCercana = cafes[i];
  }
}

console.log(
  "La cafetería más cercana es:",
  cafeteriaMasCercana.name,
  "a",
  cafeteriaMasCercana.distance,
  "km."
);

console.log("-----------------------------------");

// ####### FOR OF #######
// Bloque con bucle for of

for (const cafe of cafes) {
  if (cafe.distance < cafeteriaMasCercana.distance) {
    cafeteriaMasCercana = cafe;
  }
}

console.log(
  "La cafetería más cercana es:",
  cafeteriaMasCercana.name,
  "a",
  cafeteriaMasCercana.distance,
  "km."
);

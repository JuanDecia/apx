/*

  Se debe guardar en un arreglo las cafeterías más cercanas
  y mostrarlas por consola. Realizarlo con diferentes métodos de iteración.

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

const distanciaMaxima = 1;

// ####### WHILE #######

const cercanasWhile = [];
let auxiliarCercanas = 0;
let i = 0;

while ( i < cafes.length ) {
  
    if  ( cafes[i].distance < distanciaMaxima ) {
        cercanasWhile[auxiliarCercanas] = cafes[i];
        auxiliarCercanas++;
        // Se peude aplicar un push()
    }
    i++;
}

console.log(`Las cafeterías más cercanas son:`, cercanasWhile);
console.log("--------------------------------------------------");

// ####### FOR #######

const cercanasFor = [];

for ( let i = 0; i < cafes.length; i++ ) {
    if ( cafes[i].distance < distanciaMaxima ) {
        cercanasFor.push(cafes[i]);
    }
}

console.log(`Las cafeterías más cercanas son:`, cercanasFor);
console.log("--------------------------------------------------");

// ####### FOR OF #######

const cercanasForOf = [];

for (const c of cafes) {

    if ( c.distance < distanciaMaxima ) {
        cercanasForOf.push(c);
    }
}

console.log("La cafeterías más cercanas son:", cercanasForOf);

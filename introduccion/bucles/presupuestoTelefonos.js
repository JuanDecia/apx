/*

  Se deben usar bucles para filtrar el arreglo en base al presupuesto dado
  para comprar un teléfono.

*/

// Array de teléfonos celulares con nombre y precio
const telefonos = [
  { nombre: "Samsung Galaxy S21", precio: 799 },
  { nombre: "iPhone 13", precio: 999 },
  { nombre: "Google Pixel 6a", precio: 449 },
  { nombre: "Xiaomi Redmi Note 12", precio: 299 },
  { nombre: "OnePlus Nord CE 3 Lite", precio: 329 },
  { nombre: "Motorola Moto G Stylus", precio: 199 },
];

// Presupuesto disponible
let presupuesto = 500;

// ####### WHILE #######
// Bloque con resolución con while

// Auxiliar para posicionarnos en el array de teléfonos
// y recorrer desde el primer objeto.
let index = 0;

// Arreglo para guardar los telefonos dentro del presupuesto
let telefonosDentroDePresupuesto = [];

// Auxiliar para movernos en el array "telefonosDentroDePresupuesto"
let indiceAux = 0;

while (index < telefonos.length) {

  // Se obtiene el teléfono en la posición que se está recorriendo
  const tel = telefonos[index];

  if (tel.precio <= presupuesto) {

    // Si está dentro del presupuesto, se añade al array de acumulación
    // Se usa como índice "indiceAux" para guardar el teléfono en la posición seleccionada
    // en el primer caso es [0].
    telefonosDentroDePresupuesto[indiceAux] = tel;
    
    // Se Incrementa `indiceAux` para pasar a la siguiente posición del arreglo
    // [0] -> [1], para que el teléfono se guarde en la siguiente posición.
    indiceAux++;

    /*
        Si se utiliza el método push para agregar los teléfonos al arreglo
        de presupuesto la sintaxis sería la siguiente:

        telefonosDentroDePresupuesto.push(tel);

        Simplificando el código, eliminando la utilización del índice auxiliar.
    */
  }

  index++;
}

console.log("Teléfonos dentro de presupuesto", telefonosDentroDePresupuesto);

console.log("------------------");

// ####### FOR #######
// Bloque con resolución con for

const telefonosDentroDePresupuestoFor = [];

for ( let i = 0; i < telefonos.length; i++ ) {

    // Se obtiene el teléfono en la posición que se está recorriendo
    const tel = telefonos[i];

    if ( tel.precio <= presupuesto ) {
        telefonosDentroDePresupuestoFor.push(tel);
    }
}

console.log("Teléfonos dentro de presupuesto", telefonosDentroDePresupuestoFor);

console.log("------------------");

// ####### FOR OF #######
// Bloque con resolución con for of

const telefonosDentroDePresupuestoForOf = [];

for ( telefono of telefonos ) {

    if ( telefono.precio <= presupuesto ) {
        telefonosDentroDePresupuestoForOf.push(telefono);
    }
}

console.log("Teléfonos dentro de presupuesto For of", telefonosDentroDePresupuestoForOf);


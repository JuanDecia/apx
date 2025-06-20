/*

  Se deben utilizar diferentes bucles para calcular el costo total del
  carrito de compras.

*/

const carrito = [
  { nombre: "Manzanas", precio: 35, cantidad: 3, categoria: "Frutas" },
  { nombre: "Pan", precio: 40, cantidad: 2, categoria: "Panadería" },
  { nombre: "Leche", precio: 50, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Huevos", precio: 60, cantidad: 12, categoria: "Proteínas" },
  { nombre: "Pasta", precio: 45, cantidad: 1, categoria: "Despensa" },
  { nombre: "Queso", precio: 80, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Tomates", precio: 30, cantidad: 4, categoria: "Verduras" },
  { nombre: "Aceite de Oliva", precio: 99, cantidad: 1, categoria: "Despensa" },
  { nombre: "Jabón", precio: 70, cantidad: 2, categoria: "Higiene" },
  { nombre: "Cereal", precio: 55, cantidad: 1, categoria: "Despensa" },
];

// ####### WHILE #######
// Resolución con WHILE

// Variable para recorrer el carrito
let indice = 0;

// Acomulador para el total del carrito
let totalDelCarrito = 0;

while (indice < carrito.length) {
  
    // Se usa una variable auxiliar para calcular el total del producto
    // que se está iterando
    const productoTotal = carrito[indice].precio * carrito[indice].cantidad;

    // Se suma al total del carrito
    totalDelCarrito += productoTotal;

  indice++;
}

console.log("El total del carrito es de :", totalDelCarrito);

console.log("-----------------");

// ####### FOR #######
// Resolución con FOR

let totalDelCarritoFor = 0;

for ( let i = 0; i < carrito.length; i++ ) {

    const productoTotal = carrito[i].precio * carrito[i].cantidad;
    totalDelCarritoFor += productoTotal;
}

console.log("El total del carrito es de :", totalDelCarritoFor);

console.log("-----------------");

// ####### FOR OF #######
// Resolución con FOR OF

let totalDelCarritoForOf = 0;

for ( const producto of carrito ) {
    
    const productoTotal = producto.precio * producto.cantidad;
    totalDelCarritoForOf += productoTotal;
}

console.log("El total del carrito es de :", totalDelCarritoForOf);

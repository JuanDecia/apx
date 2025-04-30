/*

  Se debe utilizar diferentes bucles para calcular el presupuesto de compras
  para determinar que productos se pueden comprar con un monto disponible.

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

// Monto disponible para gastar
const montoDisponible = 200;

// ####### WHILE #######
// Resolución con WHILE

// Contador auxiliar para recorrer el carrito que es un objeto
let indiceLoop = 0;

// Array para guardar productos comprables
const comprables = [];

// Índice para agregar productos al array 'comprables'
let indiceComprables = 0;

// Auxiliar acomuladora del total gastado
let totalAGastar = 0;

while (indiceLoop < carrito.length) {

  // Selecconamos el producto desde la primera posición del carrito
  // es decir, el primer producto del array carrito
  // "carrito[indiceLoop]" = "carrito[0]".
  // El objeto seleccionado se manipula con 'producto'.
  const producto = carrito[indiceLoop];

  // Se utiliza una variable para guardar el total
  // del producto (precio * cantidad)
  const precioTotalItem = producto.precio * producto.cantidad;

  // Se crea una variable acumuladora para sumar el monto a lo que se está
  // calculando como "totalAGastar" y se obtiene el nuevo total
  // en caso de poder comprar el producto
  const nuevoTotalPreliminar = totalAGastar + precioTotalItem;

  // Se verifica si el "nuevoTotalPreliminar"
  //  es menor o igual a "montoDisponible"
  if ( nuevoTotalPreliminar <= montoDisponible ) {
    // Si se cumple la condición, se agrega el producto al arreglo "comprables"
    comprables[indiceComprables] = producto;
    // Se pasa al siguiente índice del array "comprables"
    indiceComprables++;
  }

  // Se establece el nuevo total acumulado
  totalAGastar = nuevoTotalPreliminar;

  // Avanzamos al siguiente producto del carrito
  indiceLoop++;
}

console.log("Con $" + montoDisponible + " puedes comprar:", comprables);

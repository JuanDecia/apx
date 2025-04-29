/*
  Se debe calcular el total del carrito de compras. Calculando el precio
  de cada producto basado en el "precioUnitario" y la cantidad.
*/

// Array con productos en el carrito
const carrito = [
  { descripcion: "Teclado Mecánico", precioUnitario: 100, cantidad: 2 },
  { descripcion: "Mouse Inalámbrico", precioUnitario: 50, cantidad: 1 },
];

let total = 0;

for (const producto of carrito) {
  // Costo producto
  const costoProducto = producto.precioUnitario * producto.cantidad;
  // Sumar costo al total
  total += costoProducto;
  // Costo por producto
  console.log(
    `El costo de ${producto.descripcion} es $${costoProducto} ($${producto.precioUnitario} x ${producto.cantidad})`
  );
}

console.log(`El total del carrito es $${total}`);

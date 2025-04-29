/*
  Se debe calcular el precio final de un producto aplicando
  un descuento determinado por la variable "porcentajeDescuento".
*/

const precioInicial = 420;

// 30% de descuento
const porcentajeDescuento = 30; 

// costo del descuento
const valorDelDescuento = precioInicial * (porcentajeDescuento / 100);

// precio final
const precioFinal = precioInicial - valorDelDescuento;
  
console.log(`Precio final con descuento aplicado, $${precioFinal}`);
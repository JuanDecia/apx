/*

  Se debe calcular el precio final de un producto usando condicionales
  en base a las siguientes condiciones:

  - Si incluye seguro, se añaden $100.
  - Si es reacondicinado, se descuenta $150.
  - Si la RAM es mayor o igual a 16GB, se agrega $50.

*/

const laptop = {
    id: "LAP123456",
    marca: "TechBrand",
    modelo: "X200",
    especificaciones: {
      procesador: "Intel Core i7",
      ram: 16, // en GB
      almacenamiento: 512, // en GB
      pantalla: 15.6 // en pulgadas
    },
    precioBase: 1000,
    incluyeSeguro: true,
    esReacondicionado: false,
    fechaFabricacion: { dia: 20, mes: 11, anio: 2023 },
    estado: "nuevo" // puede ser "nuevo" o "usado"
  };
  
  let precioFinal = laptop.precioBase;
  
  // Costo por seguro
  if ( laptop.incluyeSeguro ) {
    precioFinal += 100; 
  }
  else if ( laptop.esReacondicionado ) {
    precioFinal -= 150; // Descuento por reacondicionado
  }
  else if ( laptop.especificaciones.ram >= 16 ) {
    precioFinal += 50; // Costo por RAM
  }
  
  console.log(precioFinal);
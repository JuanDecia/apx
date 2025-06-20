/*

  Se debe calcular el costo de envío utilizando condicionales,
  teniendo en cuenta lo siguiente:

    - Es costo base es de $300
    - Si es internacional, tiene un recargo de $300.
    - Si es express, tiene un recargo de $200.
    - Se añaden $10 por kg de peso en cada producto.

*/

const envio = {
  id: "AR123456789",
  destinatario: "Laura González",
  direccion: {
    calle: "Av. Santa Fe",
    numero: 1930,
    ciudad: "CABA",
    provincia: "Buenos Aires",
  },
  productos: [
    { nombre: "Libro", peso: 1, valor: 1200 },
    { nombre: "Maceta", peso: 2, valor: 800 },
  ],
  pesoTotal: 3,
  distancia: 50, // distancia en km
  tipo: "estándar", // puede ser "estándar" o "express"
  fechaEnvio: { dia: 26, mes: 3, anio: 2024 },
  estado: "en camino", // puede ser "preparación", "en camino", "entregado"
  esInternacional: true,
};

let costoDeEnvio = 300;

if ( envio.esInternacional ) {
    costoDeEnvio += 300;
}
else if ( envio.tipo === "express" ) {
    costoDeEnvio += 200;
}
else if ( envio.pesoTotal > 0 ) {
    costoDeEnvio += 10 * envio.pesoTotal;
}

console.log(costoDeEnvio);

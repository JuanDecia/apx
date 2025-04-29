/*
  * Se verifica si la propiedad cumple con las condiciones para ser
    solicitada por un cliente. Las condiciones son: 

    - Tipo de propiedad: departamento
    - Precio máximo: 1000
    - Mínimo de habitaciones: 2

  * Si las condiciones se cumplen, se muestra el contacto del propietario
    de lo contrario se muestra un mensaje indicando que no se cumplen
    los requisitos.

  * Como extra, si la propiedad tiene más de 80 mts2 y menos de 7 días de
    publicación, se deja un mensaje indicar que se debe contactar lo antes
    posible.
*/

const propiedad = {
  id: 10543,
  titulo: "Moderno departamento en el centro",
  descripcion:
    "Luminoso departamento de 2 habitaciones con balcón y excelente vista a la ciudad.",
  tipo: "departamento", // Puede ser "casa", "departamento", "terreno", etc.
  precio: 800, // Precio mensual en la moneda especificada
  ubicacion: {
    direccion: "Av. Principal 123",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1000",
  },
  superficie: 80, // m²
  habitaciones: 2,
  banos: 1,
  amenities: ["Gimnasio", "Piscina", "SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Mariana López",
    telefono: "+54 9 11 5555-1234",
    email: "mariana@example.com",
  },
  diasPublicado: 15, // Número de días que lleva publicado
  visitas: 254,
  destacado: true, // Indica si la propiedad es destacada en el sitio
};

// Variables que evaluan la condicion
const esDepa = propiedad.tipo === "departamento";
const precioMaximo = propiedad.precio <= 1000;
const minHabitaciones = propiedad.habitaciones >= 2;
const superficieAdecuada = propiedad.superficie > 80;
const diaspublicado = propiedad.diasPublicado < 7;

if ( esDepa && precioMaximo && minHabitaciones ) {

  console.log(
    `Esta propiedad cumple con los requisitos:
         \nTitulo: ${propiedad.titulo}
         \nDescripción: ${propiedad.descripcion}
         \nTipo: ${propiedad.tipo}
         \nPrecio: ${propiedad.precio}
         \nHabitaciones: ${propiedad.habitaciones}
         \nContacto del propietario: ${propiedad.propietario.nombre}, ${propiedad.propietario.telefono}, ${propiedad.propietario.email} 
        `
  );

  // Condiciones extras
  if ( superficieAdecuada && diaspublicado ) {
    console.log(
        `La propiedad tiene ${propiedad.superficie}m2 y fue publicada hace
        ${propiedad.diasPublicado} días. Contactar lo antes posible.`
    );    
  }

} else {
    for ( detalle of propiedad ) {
        console.log(`La propiedad no cumple con los requisitos: ${detalle}`);        
    }
}

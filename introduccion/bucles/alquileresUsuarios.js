/*

  Se deben encontrar los usuarios que tienen publicadas propiedades en
  alquiler con diferentes tipos de bucles.

*/

// Array de usuarios con sus publicaciones
const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler" },
      { title: "Casa en venta - Suburbios", type: "venta" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta" },
      { title: "Cabaña en venta - Montaña", type: "venta" },
    ],
  },
  {
    id: 4,
    nombre: "Ana Torres",
    publicaciones: [],
  },
  {
    id: 5,
    nombre: "Luis Gómez",
    publicaciones: [
      { title: "Oficina en alquiler - Centro", type: "alquiler" },
      { title: "Apartamento en venta - Playa", type: "venta" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

// ####### WHILE #######
// Resolución con while

// Auxiliar para recorrer el array de usuarios porque es un objeto
let indexUsuario = 0;

while (indexUsuario < usuarios.length) {
  // Se selecciona el usuario desde la posición del indice del array que se
  // está recorriendo
  const usuario = usuarios[indexUsuario];

  console.log("Evaluando el usuario:", usuario.id);

  // Se utiliza otro indice auxiliar para recorrer las publicaciones
  // de cada usuario donde se encuentre el índice "indexUsuario"
  let indexPublicacion = 0;

  // Se verifica si el usuario no tiene publicaciones
  if (usuario.publicaciones.length === 0) {
    console.log(`El usuario ${usuario.nombre} no tiene publicaciones.`);
  } else {
    // Si tiene se utiliza otro bucle para recorrer las publicaciones
    while (indexPublicacion < usuario.publicaciones.length) {
      // Se verifica si el tipo de publicación es alquiler
      if (usuario.publicaciones[indexPublicacion].type === "alquiler") {
        console.log(
          `El usuario ${usuario.nombre} tiene una publicación de alquiler: ${usuario.publicaciones[indexPublicacion].title}`
        );
      } else {
        console.log(
          `El usuario ${usuario.nombre} no alquila, cuenta con propiedad en ${usuario.publicaciones[indexPublicacion].type}.`
        );
      }

      // Se incrementa el índice para recorrer la siguiente publicación
      indexPublicacion++;
    }
  }

  indexUsuario++;
}

// ####### FOR #######
// Resolución con for

for ( let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];

  console.log("Evaluando el usuario: ", usuario.id);

  if ( usuario.publicaciones.length === 0 ) {
    console.log(`El usuario ${usuario.nombre} no tiene publicaciones.`);
  } else {
    for ( let j = 0; j < usuario.publicaciones.length; j++ ) {
      if ( usuario.publicaciones[j].type === "alquiler" ) {
        console.log(
          `El usuario ${usuario.nombre} tiene una publicación de alquiler: ${usuario.publicaciones[j].title}.`
        );
      } else {
        console.log(`El usuario no alquila, cuenta con propiedad en ${usuario.publicaciones[j].type}.`);        
      }
    }
  }
}

// ####### FOR OF #######
// Resolución con FOR OF

for ( const usuario of usuarios ) {
  console.log("Evaluando el usuario: ", usuario.id);

  if ( usuario.publicaciones.length === 0 ) {
    console.log(`El usuario ${usuario.nombre} no tiene publicaciones.`);
  } else {
    for ( const publicacion of usuario.publicaciones ) {
      if ( publicacion.type === "alquiler" ) {
        console.log(
          `El usuario ${usuario.nombre} tiene una publiación de alquiler: ${publicacion.title}.`
        );
      } else {
        console.log(`El usuario no alquila, cuenta con propiedad en ${publicacion.type}.`);        
      }
    }
  }
}

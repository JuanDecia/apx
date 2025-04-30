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

  // inicializamos otro indice dentro del while principal
  // esto va a ocurrir una vez para cada usuario para recorrer
  // las publicaciones de las propiedades
  let indexPublicacion = 0;

  // Bucle para recorrer las publicaciones del usuario
  while (indexPublicacion < usuario.publicaciones.length) {
    // Utiliza el indexPublicacion para acceder a la publicación
    // Chequea con un if si el type es alquiler
    // si es así mostralo usando console log()
    if ( usuario.publicaciones[indexPublicacion].type === "alquiler" ) {
        
    }

    // [Tu lógica va aca]

    indexPublicacion++;
  }

  indexUsuario++;
}

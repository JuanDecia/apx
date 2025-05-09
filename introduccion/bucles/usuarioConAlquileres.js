/*

  El objetivo es encontrar a los usuarios que tengan alquiler usando un
  bucle for of. Se deben utilizar dos, uno para recorrer el arreglo de
  usuarios y otro para recorrer el arreglo de publicaciones.

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

// indice/diccionario con los ids de los usuarios con alquileres
const idsDeUsuarioConAlquileres = {};


for (const usuario of usuarios) {
  console.log("Evaluando el usuario:", usuario.id);

  for (const publicacion of usuario.publicaciones) {
    if (publicacion.type === "alquiler") {
      idsDeUsuarioConAlquileres[usuario.id] = publicacion.title;
    }
  }
}

console.log("Las propiedades con alquileres son", idsDeUsuarioConAlquileres);

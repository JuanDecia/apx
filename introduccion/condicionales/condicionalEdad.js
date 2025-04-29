// En este ejercicio se debe comparar la edad de las personas en el arreglo
// y determinar cual de las dos es mayor, el resultado debe ser true o false

const personas = [
  {
    nombre: "Vicky",
    edad: 30,
  },
  {
    nombre: "Fede",
    edad: 25,
  },
];

const resultado = personas[0].edad > personas[1].edad ? true : false;

console.log(`${personas[0].nombre} es mayor a ${personas[1].nombre}?`, resultado);
console.log(`${personas[0].nombre} es menor a ${personas[1].nombre}?`, !resultado);
/*

  Se debe utilizar operadores ternarios para comprobar los siguientes requisitos
  de una computadora.

    - Es potente si tiene más de 8GB de RAM y 4 o más núcleos.
    - Tiene capacidad si es mayor a 500GB.
    - Tipo de CPU si es menor a 3 es "lento".
    - Rango de precio si es mayor a 1000 USD es "costoso".

  Se debe agregar una descripción con las caracteristicas de la computadora,
  en el caso de que le falte potenciar algún requisito, dejar una recomendación
  para mejorarla.
    - Ejemplo, "Tiene 4GB de RAM, necesita 4GB más para ser potenete".

*/

const computadora = {
  ram: 16, // GB
  almacenamiento: 2, // TB
  nucleosCpu: 8,
  velocidadCPU: 3.5, // Ghz
  precio: 1000, // USD
};

// Comprobar si es potentente
const esPotente =
  computadora.ram >= 8 && computadora.nucleosCpu >= 4
    ? "es potente, cuenta con " +
      computadora.ram +
      "GB de RAM y " +
      computadora.nucleosCpu +
      " núcleos"
    : "No alcanza con los requisitos para ser potente " +
      "Necesita " +
      (8 - computadora.ram) +
      "GB más de RAM y " +
      (4 - computadora.nucleosCpu) +
      " núcleos más para ser potente.";

// Comprobar capacidad
const capacidad =
  computadora.almacenamiento > 500
    ? "Capacidad de almacenamiento suficiente" +
      computadora.almacenamiento +
      "GB"
    : computadora.almacenamiento +
      " GB " +
      "Se recomienda agregar " +
      (500 - computadora.almacenamiento) +
      "GB más de almacenamiento";

// Comprobar tipo de CPU
const tipoCPU =
  computadora.velocidadCPU > 3
    ? "rápido con " + computadora.velocidadCPU + " Ghz"
    : "lento, se recomienda un CPU de 3 Ghz o más porque cuenta con" +
      computadora.velocidadCPU +
      " Ghz";

// Comprobar rango de precio
const rangoPrecio = computadora.precio >= 1000 ? "costoso" : "económico";

// Redacta una descripción
const descripcion = `Esta computadora ${esPotente}, cuenta con ${capacidad},
tiene un tipo de CPU ${tipoCPU}. Es un rango de precio ${rangoPrecio}, valiento ${computadora.precio} USD.`;

console.log(descripcion);

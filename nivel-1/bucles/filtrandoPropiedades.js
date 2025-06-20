/*

  Se debe filtrar en un arreglo de propiedades en base a un objeto
  que representa un filtro de búsqueda.

*/

const propiedades = [
  {
    barrio: "Palermo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 120000,
    metrosCuadrados: 50,
  },
  {
    barrio: "Recoleta",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 3,
    precio: 250000,
    metrosCuadrados: 85,
  },
  {
    barrio: "Belgrano",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 5,
    precio: 350000,
    metrosCuadrados: 120,
  },
  {
    barrio: "Villa Crespo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 100000,
    metrosCuadrados: 45,
  },
  {
    barrio: "San Telmo",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 4,
    precio: 300000,
    metrosCuadrados: 90,
  },
  {
    barrio: "Caballito",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 4,
    precio: 280000,
    metrosCuadrados: 110,
  },
  {
    barrio: "Núñez",
    tipoOperacion: "compra",
    tipoPropiedad: "quinta",
    ambientes: 6,
    precio: 900000,
    metrosCuadrados: 200,
  },
  {
    barrio: "Almagro",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 1,
    precio: 80000,
    metrosCuadrados: 35,
  },
  {
    barrio: "Barracas",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 150000,
    metrosCuadrados: 60,
  },
  {
    barrio: "La Boca",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 3,
    precio: 110000,
    metrosCuadrados: 70,
  },
  {
    barrio: "Flores",
    tipoOperacion: "compra",
    tipoPropiedad: "casa",
    ambientes: 4,
    precio: 400000,
    metrosCuadrados: 130,
  },
  {
    barrio: "Boedo",
    tipoOperacion: "alquiler",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 95000,
    metrosCuadrados: 55,
  },
  {
    barrio: "Villa Devoto",
    tipoOperacion: "compra",
    tipoPropiedad: "quinta",
    ambientes: 5,
    precio: 750000,
    metrosCuadrados: 180,
  },
  {
    barrio: "Liniers",
    tipoOperacion: "alquiler",
    tipoPropiedad: "casa",
    ambientes: 3,
    precio: 200000,
    metrosCuadrados: 100,
  },
  {
    barrio: "Parque Patricios",
    tipoOperacion: "compra",
    tipoPropiedad: "departamento",
    ambientes: 2,
    precio: 220000,
    metrosCuadrados: 65,
  },
];

const filtros = {
  barrio: ["Palermo", "Recoleta"], // Lista de barrios aceptados
  tipoOperacion: "alquiler", // Filtrar por tipo de operación ('alquiler' o 'compra')
  tipoPropiedad: ["departamento", "casa"], // Lista de tipos de propiedad aceptados
  ambientesMin: 2, // Número mínimo de ambientes
  ambientesMax: 4, // Número máximo de ambientes
  precioMin: 100000, // Precio mínimo
  precioMax: 300000, // Precio máximo
  metrosCuadradosMin: 50, // Metros cuadrados mínimos
  metrosCuadradosMax: 100, // Metros cuadrados máximos
};

const propiedadesFiltradas = [];
let indicePropsFiltradas = 0;

// Itera por cada posicion, es decir, por cada propiedad
for ( propiedad of propiedades ) {
  let cumpleFiltros = true;

  // Verificamos Barrio
  if ( filtros.barrio ) {
    let encontrado = false;

    for ( const barrio of filtros.barrio ) {
      if ( barrio === propiedad.barrio ) {
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      cumpleFiltros = false;
    }
  }

  // Verificamos tipo de propiedad
  if ( filtros.propiedad ) {
    let encontrado = false;

    for ( tipo of filtros.tipoPropiedad ) {
      if ( tipo === propiedad.tipoPropiedad ) {
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      cumpleFiltros = false;
    }

  }

  // Tipo de operación
  if ( filtros.tipoOperacion && propiedad.tipoOperacion !== filtros.tipoOperacion ) {
    cumpleFiltros = false;
    // Ambientes min
  } else if ( filtros.ambientesMin && propiedad.ambientes < filtros.ambientesMin ) {
    cumpleFiltros = false;
    // Ambientes max
  } else if ( filtros.ambientesMax && propiedad.ambientes > filtros.ambientesMax ) {
    cumpleFiltros = false;
    // Precio min
  } else if ( filtros.precioMin && propiedad.precio < filtros.precioMin ) {
    cumpleFiltros = false;
    // Precio max
  } else if ( filtros.precioMax && propiedad.precio > filtros.precioMax ) {
    cumpleFiltros = false;
    // m2 min
  } else if ( filtros.metrosCuadradosMin && propiedad.metrosCuadrados < filtros.metrosCuadradosMin ) {
    cumpleFiltros = false;
    // m2 max
  } else if ( filtros.metrosCuadradosMax && propiedad.metrosCuadrados > filtros.metrosCuadradosMax ) {
    cumpleFiltros = false;
  }
  
  // Si pasa todos los filtros la agregamos al arreglo
  if (cumpleFiltros) {
    propiedadesFiltradas[indicePropsFiltradas] = propiedad;
    indicePropsFiltradas++;
    // Se puede hacer con un push para simplificar la lógica.
  }
}

console.log(propiedadesFiltradas);
console.log("Resultados encontrados: " + propiedadesFiltradas.length);

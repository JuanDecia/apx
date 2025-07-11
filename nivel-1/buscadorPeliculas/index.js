/*

  La app tiene que recibir argumentos a través de la terminal y 
    mostrar un listado de películas basado en los argumentos recibidos.

  Ejemplo: node index.js --sort title

  index.js: Recibe argumentos, los procesa y delega las acciones a pelis.js.

  pelis.js: Lee el archivo JSON. Funciones para interactuar con las películas.

  pelis.json: Es una array de objetos que tiene los datos de las películas. 
    Cada película (c/ objeto del array) puede tener las propiedades que quieras, 
    pero deben tener al menos estas tres propiedades: title, rating y tags.

  El sistema puede trabajar:
    - Sin parámetros: 'node index.js' (Sin argumento, 
      la aplicación retorna todas las películas.

    - Sort: 'node index.js --sort {nombreDeLaPropiedad}'

    - Sort Title: 'node index.js --sort title' 
      El argumento sort debe soportar cualquier propiedad, por ejemplo rating.)

    - Search: 'node index.js --search {searchCriteria}'

    - Search con palabra: 'node index.js --search magic'

    - Tag: 'node index.js --tag {nombreDelTag}'
      
    - 'node index.js --tag thriller'
      Importante: El argumento tag es en singular. Si bien en el JSON dice tags
      (en plural), el argumento que hay que pasarle al programa es en singular,
      porque busca de a un tag a la vez.
*/

// guarda la propiedad 'argv' del módulo 'process'
const { argv } = require('process');

// Importamos las funciones del módulo 'pelis.js'
const { getPelis, sortPelis, searchPelis, tagPelis } = require('./pelis');

// obtenemos solo el argumento[2] de la terminal,
// ignorando el nombre del archivo[0] y el path de node[1]
const args = argv.slice(2); 

// Función ejecutadora
const main = () => {

    // Sin argumento, se muestran todas las películas
    if (args.length === 0) {
        const pelis = getPelis();
        console.table(pelis);
    // Si el argumento es '--sort' y tiene una propiedad
    // --sort title
    } else if (args[0] === '--sort' && args[1]) {
        const ordenarPelis = sortPelis(args[1]);
        console.table(ordenarPelis);
    // Si el argumento es '--search' y tiene una propiedad
    // --search magic
    } else if (args[0] === '--search' && args[1]) {
        const buscarPelis = searchPelis(args[1]);
        console.table(buscarPelis);
    // Si el argumento es '--tag' y tiene una propiedad
    // --tag thriller
    } else if (args[0] === '--tag' && args[1]) {
        const pelisFiltradasPorTag = tagPelis(args[1]);
        console.table(pelisFiltradasPorTag);
    // Si el argumento no es válido
    } else {
        console.error('Parámetros no válidos. Usa --sort, --search o --tag.');
    }
}

main(); // Ejecutamos la función principal
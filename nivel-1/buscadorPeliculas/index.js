/*

    La app tiene que recibir argumentos a través de la terminal y mostrar un listado
    de películas basado en los argumentos recibidos.

    Ejemplo: node index.js --sort title

    La app tiene que tener la siguiente estructura:

    * index.js: Recibe argumentos, los procesa y delega las acciones a pelis.js.

    * pelis.js: Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.

    * pelis.json: Es una colección (array de objetos) que tiene los datos de las películas. 
      Cada película (cada objeto del array) puede tener las propiedades que quieras, 
      pero deben tener al menos estas tres propiedades: title, rating y tags.

    La app debe poder resolver los siguientes casos:
      - Sin parámetros: node index.js (Si no le pasás ningún argumento, 
        la aplicación tiene que devolver todas las películas. Podés imprimir la 
        salida en cualquier formato, por ejemplo: console.table())

      - Sort: node index.js --sort {nombreDeLaPropiedad} (El argumento --sort 
        debe ordenar la salida en base a ese parámetro.).
        Sort Title: node index.js --sort title (Devuelve las películas en 
        orden alfabético basándose en su título (propiedad title) Importante: 
        El argumento sort debe soportar cualquier propiedad, por ejemplo rating.)

      - Search: node index.js --search {searchCriteria} (El argumento --search 
        debe devolver las películas que tienen el texto del argumento.)
        Search con palabra: node index.js --search magic (Devolver las películas
        que tienen la palabra "magic" en su título)

      - Tag: node index.js --tag {nombreDelTag} (Si le pasás el argumento --tag 
        debe devolver las películas que tienen ese tag.)
        node index.js --tag thriller (Debería devolver las películas que 
        tengan el tag acción.Importante: El argumento tag es en singular.
        Si bien en el JSON dice tags (en plural), el argumento que hay 
        que pasarle a tu programa es en singular, porque busca de a un
        tag a la vez.)

    La app debe leer el archivo "pelis.json" de esta forma: fs.readFileSync(__dirname +"/pelis.json")
    "__dirname" es una referencia al directorio actual. Esto asegura 
    que Node encuentre el archivo en distintas situaciones como el test automático.
*/

const { argv } = require('process');
const { getPelis, sortPelis, searchPelis, tagPelis } = require('./pelis');

const args = argv.slice(2); // Obtenemos los argumentos de la terminal

// Función ejecutadora
const main = () => {
    if (args.length === 0) {
        // Sin parámetros, mostramos todas las películas
        const pelis = getPelis();
        console.table(pelis);
    } else if (args[0] === '--sort' && args[1]) {
        // Ordenamos las películas por la propiedad indicada
        const sortedPelis = sortPelis(args[1]);
        console.table(sortedPelis);
    } else if (args[0] === '--search' && args[1]) {
        // Buscamos películas que contengan el criterio de búsqueda
        const searchedPelis = searchPelis(args[1]);
        console.table(searchedPelis);
    } else if (args[0] === '--tag' && args[1]) {
        // Filtramos películas por el tag indicado
        const taggedPelis = tagPelis(args[1]);
        console.table(taggedPelis);
    } else {
        console.error('Parámetros no válidos. Usa --sort, --search o --tag.');
    }
}

main(); // Ejecutamos la función principal
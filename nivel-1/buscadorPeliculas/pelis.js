/*
    Módulo para procesar películas desde un archivo JSON.
    Funciones para obtener, ordenar, buscar y filtrar películas.
*/

// Importar módulo 'fs' para manejar archivos con node
const fs = require('fs');

// Cargar el archivo JSON que contiene las películas
// '__dirname' es una variable que contiene la ruta del directorio actual
const pelis = JSON.parse(fs.readFileSync(__dirname + '/pelis.json', 'utf-8'));

/*
    Obtener todas las películas
    @return - devuelve el array de peliculas del JSON como objeto
*/
const getPelis = () => {
    return pelis;
};

/*
    Ordenar peliculas por propiedad.
    @param property - propiedad por la que se ordenan las peliculas.
    Si la propiedad no existe en ninguna pelicula, muestra error y retorna un arr. vacío.
    Ejemplo de uso: sortPelis('title') o sortPelis('year')
*/
const sortPelis = (property) => {

    // Verifica si la propiedad existe en al menos una película
    // Si la condición es falsa, devuelve un mensaje y retorna un array vacío
    if (!pelis.some(peli => property in peli)) {
        console.error(`La propiedad "${property}" no existe en las películas.`);
        return [];
    }
    
    // Luego de verificar la propiedad, si no está vacía las compara y ordena.
    // Retorna el array ordenado por la propiedad indicada.
    // Si son iguales, retorna 0, no cambia el orden.
    return pelis.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
};

/*
    Buscar pélicula por título.

    @param titulo - propiedad 'title' de la película a buscar.
    
    Si existe el parametro, retorna un array con un filtro
    de las películas que contengan el título buscado.

    Ejemplo de uso: searchPelis('batman') o searchPelis('batman begins')
*/
const searchPelis = (titulo) => {

    // Verifica que el párametro no esté vacío
    // Si lo está, muestra un error y retorna un array vacío
    if (!titulo) {
        console.error('El criterio de búsqueda no puede estar vacío.');
        return [];
    }

    // Retorna un array filtrado por el título buscado
    return pelis.filter(peli => 
        peli.title.toLowerCase().includes(titulo.toLowerCase())
    );
};

/*
    Filtrar películas por tag.

    @param tag - propiedad 'tags' de la película a buscar.

    Si existe el parámetro, retorna un array con el filtro
    de las películas que contengan el tag buscado.
*/
const tagPelis = (tag) => {

    // Verifica que el parámetro no esté vacío
    // Si lo está, muestra un error y retorna un array vacío
    if (!tag) {
        console.error('El tag no puede estar vacío.');
        return [];
    }

    // Retorna un array filtrado por el tag buscado
    return pelis.filter(peli => 

        // peli.tags - verifica que la pelicula tenga una propiedad 'tags'
        // convierte los tags a minúsculas
        // metodo includes - verifica si el tag buscado está en el array de tags
        peli.tags && peli.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
};

// Se exportan las funciones para ser utilizadas en otros archivos
module.exports = {
    getPelis,
    sortPelis,
    searchPelis,
    tagPelis
};
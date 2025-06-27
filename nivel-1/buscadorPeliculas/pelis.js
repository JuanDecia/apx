const fs = require('fs'); // Importar Módulo 'fs' para manejar archivos con node

// Carga y transforma el archivo pelis.json en un objeto
const pelis = JSON.parse(fs.readFileSync(__dirname + '/pelis.json', 'utf-8'));

// Verificar si el archivo cargo correctamente
if (!pelis || !Array.isArray(pelis)) {
    console.error('Error al cargar las películas desde pelis.json');
    throw new Error('No se pudo cargar la lista de películas.');
}

// Función para obtener todas las películas y retornarlas
const getPelis = () => {
    return pelis;
};

// Función para ordenar las películas por una propiedad
const sortPelis = (property) => {

    // Verificamos si la propiedad no existe en una película
    // Los que existen pasan a ser ordenados.
    if (!pelis.some(peli => property in peli)) {
        console.error(`La propiedad "${property}" no existe en las películas.`);
        return []; // Retorna array vacío si no encontró ninguna peli
    }

    // Si encuentra la propiedad, ordena por esa propiedad a través de sort
    return pelis.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
};

const searchPelis = (criteria) => {
    if (!criteria) {
        console.error('El criterio de búsqueda no puede estar vacío.');
        return [];
    }

    return pelis.filter(peli => 
        peli.title.toLowerCase().includes(criteria.toLowerCase()) ||
        (peli.tags && peli.tags.some(tag => tag.toLowerCase().includes(criteria.toLowerCase())))
    );
};


// Función para filtrar películas por un tag
const tagPelis = (tag) => {
    if (!tag) {
        console.error('El tag no puede estar vacío.');
        return [];
    }

    return pelis.filter(peli => 
        peli.tags && peli.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
};


// Exportamos las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
    getPelis,
    sortPelis,
    searchPelis,
    tagPelis
};




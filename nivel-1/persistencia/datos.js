// Importa modulo 'fs' para manejar archivos en node
const fs = require('fs');

// se crea un objeto de datos.json
let archivo = fs.readFileSync('datos.json', 'utf-8');

// Convierte el contenido de archivo a un objeto y lo retorna
const getAll = () => {
    return JSON.parse(archivo);
}

const getOlderThan = (edad) => {
    // Convertimos el contenido del archivo a objeto
    const datos = JSON.parse(archivo);

    // Filtramos edad
    const mayores = datos.filter((persona) => {
        return persona.edad > edad;
    });

    return mayores;
}

// Exportar las funciones para que estén disponibles en los tests
module.exports = { getAll, getOlderThan };

// Función inicializadora del programa
const main = () => {
    // Se guarda el contenido en variable
    const datosObjeto = getAll();
}

main();

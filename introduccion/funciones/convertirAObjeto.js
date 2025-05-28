// Convertir arguments a un objeto.
const convertArgsToObject = (args) => {
  // Se importa argv desde el módulo 'process'.
  const { argv } = require('node:process');

  // Destructuramos argv para obtener la ruta de node, la ruta del archivo ejecutado
  // y los argumentos restantes.
  const [ nodeExactPath, excecutedPath, ...arguments ] = argv;

  // Objeto vacío para guardar los argumentos como 'clave: valor'.
  const objct = {};

  // Iterar sobre 'args' de a dos posiciones.
  for (let i = 0; i < arguments.length; i += 2) {
    const key = arguments[i];
    const value = arguments[i + 1];

    // Verificamos que el valor exista y que la clave comience con '--'.
    if (value && key.startsWith('--')) {
      // Eliminamos el prefijo '--' de la clave.
      const cleanKey = key.slice(2);
      // Asignamos el valor al objeto con la clave limpia.
      objct[cleanKey] = value;
    }

    // Se retorna el objeto construído.
  }

    return objct;
}

const main = () => {
  // Se obtiene el objeto de argumentos.
  const argsObject = convertArgsToObject(process.argv);
    
  // Se imprime el objeto de argumentos.
  console.log(argsObject);
}

main();
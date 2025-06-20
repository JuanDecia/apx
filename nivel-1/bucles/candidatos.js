/*

  Recorrer el arreglo para verificar si el usuario tiene las habilidades
  necesarias para cumplir con los requisitos.

*/

const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};

const candidatos = [];

for (const index in usuarios) {
  const usuario = usuarios[index];
  
  let cumpleTodosLosRequisitos = true;

  for (const requisito of aviso.requisitos) {

    let tieneHabilidad = false;
    // chequeo los requisitos del aviso
    // si el usuario no cumple alguno de ellos,
    // cumpleTodosLosRequisitos se vuelve false

    for ( const habilidad of usuario.habilidades ) {
        if ( habilidad === requisito) {
            tieneHabilidad = true;
            break;
        }
    }

    if ( !tieneHabilidad ) {
        cumpleTodosLosRequisitos = false;
        break;
    }
  }

  if (cumpleTodosLosRequisitos) {
    // agrego al usuario al array de candidatos
    candidatos.push(usuario);
  }
}

console.log(candidatos);

/*
  Instrucciones:

    - Crear función main que no reciba parámetros ni retorne nada.
    - Crear una funcion que reciba el arreglo de objetos. La función debe
        filtrar el arreglo y solo devolver un nuevo arreglo con los objetos que
        solo tengan números pares.
*/

const arrayObjetos = [
  { texto: "hola", unNumero: 4 },
  { texto: "mundo", unNumero: 7 },
  { texto: "programación", unNumero: 10 },
  { texto: "JavaScript", unNumero: 15 },
  { texto: "desarrollo", unNumero: 22 },
  { texto: "funciones", unNumero: 6 },
  { texto: "objetos", unNumero: 31 },
  { texto: "arrays", unNumero: 28 },
  { texto: "código", unNumero: 9 },
  { texto: "ejemplo", unNumero: 19 },
  { texto: "variables", unNumero: 12 },
  { texto: "constantes", unNumero: 25 },
  { texto: "bucles", unNumero: 14 },
  { texto: "condiciones", unNumero: 8 },
  { texto: "estructura", unNumero: 27 },
  { texto: "lógica", unNumero: 3 },
  { texto: "sintaxis", unNumero: 18 },
  { texto: "algoritmos", unNumero: 11 },
  { texto: "datos", unNumero: 30 },
  { texto: "debugging", unNumero: 5 },
];

const filtrarPorPares = (arreglo) => {
  const soloPares = [];

  for (objeto of arreglo) {
    if (objeto.unNumero % 2 === 0) {
        soloPares.push(objeto);
    }
  }

  return soloPares;
};

const main = () => {
  console.log("Objetos Pares: ", filtrarPorPares(arrayObjetos));
};

main();

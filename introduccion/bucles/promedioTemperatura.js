/*

  Se debe calcular el promedio por temperatura en Buenos Aires los primeros
  tres días del 2024. Realizar diferentes métodos de bucles.

*/

const temperaturaPorHora = [
  { fecha: "2024-01-01", hora: "00:00", temperatura: 24.2 },
  { fecha: "2024-01-01", hora: "01:00", temperatura: 23.5 },
  { fecha: "2024-01-01", hora: "02:00", temperatura: 22.8 },
  { fecha: "2024-01-01", hora: "03:00", temperatura: 22.0 },
  { fecha: "2024-01-01", hora: "04:00", temperatura: 21.5 },
  { fecha: "2024-01-01", hora: "05:00", temperatura: 21.1 },
  { fecha: "2024-01-01", hora: "06:00", temperatura: 21.0 },
  { fecha: "2024-01-01", hora: "07:00", temperatura: 22.3 },
  { fecha: "2024-01-01", hora: "08:00", temperatura: 24.0 },
  { fecha: "2024-01-01", hora: "09:00", temperatura: 26.5 },
  { fecha: "2024-01-01", hora: "10:00", temperatura: 29.2 },
  { fecha: "2024-01-01", hora: "11:00", temperatura: 31.0 },
  { fecha: "2024-01-01", hora: "12:00", temperatura: 32.8 },
  { fecha: "2024-01-01", hora: "13:00", temperatura: 34.0 },
  { fecha: "2024-01-01", hora: "14:00", temperatura: 35.2 },
  { fecha: "2024-01-01", hora: "15:00", temperatura: 36.0 },
  { fecha: "2024-01-01", hora: "16:00", temperatura: 35.0 },
  { fecha: "2024-01-01", hora: "17:00", temperatura: 33.5 },
  { fecha: "2024-01-01", hora: "18:00", temperatura: 31.8 },
  { fecha: "2024-01-01", hora: "19:00", temperatura: 29.7 },
  { fecha: "2024-01-01", hora: "20:00", temperatura: 27.5 },
  { fecha: "2024-01-01", hora: "21:00", temperatura: 26.2 },
  { fecha: "2024-01-01", hora: "22:00", temperatura: 25.0 },
  { fecha: "2024-01-01", hora: "23:00", temperatura: 24.5 },

  { fecha: "2024-01-02", hora: "00:00", temperatura: 24.0 },
  { fecha: "2024-01-02", hora: "01:00", temperatura: 23.4 },
  { fecha: "2024-01-02", hora: "02:00", temperatura: 22.6 },
  { fecha: "2024-01-02", hora: "03:00", temperatura: 22.0 },
  { fecha: "2024-01-02", hora: "04:00", temperatura: 21.8 },
  { fecha: "2024-01-02", hora: "05:00", temperatura: 21.6 },
  { fecha: "2024-01-02", hora: "06:00", temperatura: 21.5 },
  { fecha: "2024-01-02", hora: "07:00", temperatura: 23.0 },
  { fecha: "2024-01-02", hora: "08:00", temperatura: 25.3 },
  { fecha: "2024-01-02", hora: "09:00", temperatura: 28.0 },
  { fecha: "2024-01-02", hora: "10:00", temperatura: 30.5 },
  { fecha: "2024-01-02", hora: "11:00", temperatura: 32.7 },
  { fecha: "2024-01-02", hora: "12:00", temperatura: 34.2 },
  { fecha: "2024-01-02", hora: "13:00", temperatura: 35.5 },
  { fecha: "2024-01-02", hora: "14:00", temperatura: 36.0 },
  { fecha: "2024-01-02", hora: "15:00", temperatura: 36.5 },
  { fecha: "2024-01-02", hora: "16:00", temperatura: 35.8 },
  { fecha: "2024-01-02", hora: "17:00", temperatura: 34.2 },
  { fecha: "2024-01-02", hora: "18:00", temperatura: 32.5 },
  { fecha: "2024-01-02", hora: "19:00", temperatura: 30.2 },
  { fecha: "2024-01-02", hora: "20:00", temperatura: 28.0 },
  { fecha: "2024-01-02", hora: "21:00", temperatura: 26.8 },
  { fecha: "2024-01-02", hora: "22:00", temperatura: 25.5 },
  { fecha: "2024-01-02", hora: "23:00", temperatura: 24.9 },

  { fecha: "2024-01-03", hora: "00:00", temperatura: 23.5 },
  { fecha: "2024-01-03", hora: "01:00", temperatura: 22.9 },
  { fecha: "2024-01-03", hora: "02:00", temperatura: 22.2 },
  { fecha: "2024-01-03", hora: "03:00", temperatura: 21.7 },
  { fecha: "2024-01-03", hora: "04:00", temperatura: 21.1 },
  { fecha: "2024-01-03", hora: "05:00", temperatura: 20.8 },
  { fecha: "2024-01-03", hora: "06:00", temperatura: 20.5 },
  { fecha: "2024-01-03", hora: "07:00", temperatura: 21.2 },
  { fecha: "2024-01-03", hora: "08:00", temperatura: 23.0 },
  { fecha: "2024-01-03", hora: "09:00", temperatura: 25.2 },
  { fecha: "2024-01-03", hora: "10:00", temperatura: 27.6 },
  { fecha: "2024-01-03", hora: "11:00", temperatura: 29.1 },
  { fecha: "2024-01-03", hora: "12:00", temperatura: 30.3 },
  { fecha: "2024-01-03", hora: "13:00", temperatura: 31.0 },
  { fecha: "2024-01-03", hora: "14:00", temperatura: 32.1 },
  { fecha: "2024-01-03", hora: "15:00", temperatura: 32.5 },
  { fecha: "2024-01-03", hora: "16:00", temperatura: 31.8 },
  { fecha: "2024-01-03", hora: "17:00", temperatura: 30.2 },
  { fecha: "2024-01-03", hora: "18:00", temperatura: 28.6 },
  { fecha: "2024-01-03", hora: "19:00", temperatura: 27.0 },
  { fecha: "2024-01-03", hora: "20:00", temperatura: 25.3 },
  { fecha: "2024-01-03", hora: "21:00", temperatura: 24.1 },
  { fecha: "2024-01-03", hora: "22:00", temperatura: 23.4 },
  { fecha: "2024-01-03", hora: "23:00", temperatura: 22.8 },
];

// ####### POR HORA (una posición) #######
// ------- WHILE -------
let sumaTotalWhile1 = 0;
let contadorWhile1 = 0;

let i = 0;

while ( i < temperaturaPorHora.length ) {

    sumaTotalWhile1 += temperaturaPorHora[i].temperatura;
    contadorWhile1++ 
    i++;
}
 
let promedioWhile = sumaTotalWhile1 / contadorWhile1;

// ------- FOR -------
let sumaTotalFor = 0;
let contadorFor = 0;

for (let i = 0; i < temperaturaPorHora.length; i++) {
  sumaTotalFor += temperaturaPorHora[i].temperatura;
  contadorFor++;
}

let promedioFor = sumaTotalFor / contadorFor;

// ------- FOR OF -------
let sumaTotalForOf = 0;
let contadorForOf = 0;

for ( temperatura of temperaturaPorHora ) {
    sumaTotalForOf += temperatura.temperatura;
    contadorForOf++;
}

let promedioForOf = sumaTotalForOf / contadorForOf;

// ------- RESULTADOS POR HORA -------

console.log("####### RESULTADOS POR HORA:");
console.log("Promedio cada hora while:", promedioWhile);
console.log("Promedio cada hora for:", promedioFor);
console.log("Promedio cada hora for of:", promedioForOf);



// let sumaTotal2 = 0;
// let contador2 = 0;

// // Recorrer de a 2 posiciones (cada 2 horas)
// for (let i = 0; i < temperaturaPorHora.length; i += 2) {
//   // [Tu lógica]
// }
// let promedio2 = sumaTotal2 / contador2;
// console.log("Promedio cada 2 horas:", promedio2);

// // Recorrer de a 3 posiciones (cada 3 horas)
// // [Tu lógica]

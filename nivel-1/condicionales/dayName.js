// Relacionar el numero del dia con el nombre de la semana e imprimir el resultado usando Switch.

const day = new Date();
const diaActual = (day.getDay() + 6) % 7 + 1; // Convert to 1-7 (Monday-Sunday)

// Variable auxiliar para almacenar el nombre del día
let nombreDia = '';

// Se pasa como condicion 'diaActual' donde se recibe el número del día.
switch ( diaActual ) {

    case 1:
        nombreDia = 'Lunes';
        break;
    case 2: 
        nombreDia = 'Martes';
        break;
    case 3:
        nombreDia = 'Miércoles';
        break;
    case 4:
        nombreDia = 'Jueves';
        break;
    case 5:
        nombreDia = 'Viernes';
        break;
    case 6:
        nombreDia = 'Sábado';
        break;
    case 7:
        nombreDia = 'Domingo';
        break;
    default:
        nombreDia = 'Error: Día no válido';
        break;
};

console.log(`Número de la semana: ${diaActual}, es ${nombreDia}.`);
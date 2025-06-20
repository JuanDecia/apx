import test from 'ava';
import { getAll, getOlderThan } from '../datos.js'; // Ajusta la ruta según tu estructura

test('debería devolver todas las personas', t => {
    const personas = getAll();
    t.is(personas.length, 2); // Cambia el número según cuántas personas tengas en datos.json
});

test('debería devolver personas mayores a 30', t => {
    const mayores = getOlderThan(30);
    t.is(mayores.length, 1); // Cambia el número según tus datos
});

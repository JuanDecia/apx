const sumar = (a, b) => {
    return a + b;
}

const restar = (a, b) => {
    return a - b;
}
const multiplicar = (a, b) => {
    return a * b;
}
const dividir = (a, b) => {
    return b !== 0 ? a / b : 'Error: División por cero';
}

module.exports = { sumar, restar, multiplicar, dividir };
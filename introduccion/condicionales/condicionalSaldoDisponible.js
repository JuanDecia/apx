/* 
  Se debe verificar si el estado de cuenta tiene saldo suficiente para comprar
  el producto deseado. El resulado debe ser un booleano.
*/ 

// Estado de cuenta
const estadoDeCuenta = {
  saldoDisponible: 500,
};

// Producto deseado
const producto = {
  nombre: "Teclado Mecánico",
  precio: 300,
};

const saldoSuficiente = estadoDeCuenta.saldoDisponible >= producto.precio ? true : false;

// Retorna true porque el saldo es mayor o igual
console.log("Saldo suficiente", saldoSuficiente);
// !saldoSuficiente valida lo opuesto al valor del resutlado
console.log("Saldo insuficiente", !saldoSuficiente);

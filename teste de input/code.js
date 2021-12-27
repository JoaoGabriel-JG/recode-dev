var readlineSync = require('readline-sync');
var valor1 = 0;
var valor2 = 0;
var total = 0;

console.log("SOMA DE DOIS NÚMEROS");
valor1 = parseFloat(readlineSync.question('Digite um número: '));
valor2 = parseFloat(readlineSync.question('Digite outro número: '));
total = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a: " + total);
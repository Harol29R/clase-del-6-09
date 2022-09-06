"use strict";//directiva que indica que estamos trabajando en modo estricto
/**
  * Comentarios de bloque
  */

//declaración de variables o contenedores
/*var variable1 = 10; //caracter global
let variable2 = 23; // de ámbito local
const constante = 3.14; // declarar constantes

if (true) {
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2);
}

console.log(variable2); */

//Realizar un programa que lea 2 números y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("introduzca un número");
num2 = prompt("introduzca otro número");
let suma =0;
suma = parseFloat (num1) + parseFloat(num2);
console.log("El resultado de la suma es:"+suma)
alert("la suma es:"+suma)
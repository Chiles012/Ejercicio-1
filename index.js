// tipo de variables

// var variables, se puede reasignar valor
var carName = "Volvo";

// const constante, no se puede cambiar su valor
const constCarName = "Volvo"; // camel case - camelCase

// tipo de datos
// numerico Number
var entero = 1,
    double = 2.2,
    infinity = 10/0, // infinito
    nan = 'hola' + 2, // NaN
    cientifico = 2.2e+6 // notacion cientifica

// string o cadena texto
var string = 'Hola Mundo!',
    string2 = "Hola Mundo!"

// valores indefinidos undefined
var a;

// valor nulo
var a = null;

// boolean true false
var boolean1 = true,
    boolean2 = false;

// Object
var object = {
    // key: value
    name: 'Christian',
    lastname: 'Serrano'
}

console.log(`
    Mi nombre es: ${object.name} Axel ${object.lastname} Sandoval
    Mi edad es: ${double}    
`);

// crear dos variables al mismo tiempo
var x = 50,
    y = 50;

var a = 5;
var b = 10;

// suma de dos valores
var suma = a + b;

var z = x + y;

// Impresion de valores
console.log(z)

// alertas
alert(z)

// Comentarios de una sola linea //
/*

    Comentario multilinea

*/

// operadoes aritmeticos
// suma o adicion
var suma = 1 + 2;

// division
var div = 1 / 2;

// modular
var mod = 11 % 2; // 1

// multiplicacion
var mol = 1 * 2;

var mod = 1

// incremento
var i = mod++; // incrementando despues
var i = ++mod; // incrementado antes

console.log(++i);
console.log(i++);

// decremento
var i = mod--;
var i = --mod;

// operadores logicos
// igual y estrictamente igual
if (i == 1) {// i = 1, '1' = true de lo contrario seria false 
    console.log('i es igual a uno');
}

if (i === 1) {
    console.log('Estrictamente igual a uno')
}

// deferentes
if (i != i) {
    console.log('I es diferente a uno')
}

if (i !== 1) {
    console.log('Estrictamente igual, valor y tipo son diferentes')
}

// mayor que y el mayor igual, menor que y menor igual
if (i > 1) {
    console.log('i es mayor a 1')
}

if (i >= 1) {
    console.log('i es mayor o igual a uno')
}

if (i < 1) {
    console.log('i es menor a uno')
}

if (i <= 1) {
    console.log('i es menor o igual a uno')
}

// AND y OR
if (i > 10 && (i <= 30 || i % 2)) {
    console.log('i esta entre los valores 11 y 30');
}

if (i === 0 || mod === null) {
    console.log('i es igual o igual a nulo')
}
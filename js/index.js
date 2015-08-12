
var mymath = require('./mymath');
var _ = require('underscore');

console.log('¡¡¡Hola Node JS !!!');
console.log('Sumando 2 + 2 = ' + mymath.add(2, 2));
console.log('Aleatorio entre 1 y 100 = ' + _.random(1, 100));


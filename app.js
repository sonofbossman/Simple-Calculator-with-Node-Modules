 // Importing the dependencies
 const path = require('path');
 const colors = require('colors');
 const calculator = require('./my_module/calculator');

// Retrieve the basename of current file
console.log(path.basename(__filename));

// Add color to the console output
console.log(colors.green(path.basename(__filename)));

// Use calculator module to perform arithmetic operations
let [ num1, num2 ] = [ 30, 10 ];
console.log(colors.rainbow(`${num1} + ${num2}  = ${calculator.add(num1, num2)}`));
console.log(colors.rainbow(`${num1} - ${num2}  = ${calculator.subtract(num1, num2)}`));
console.log(colors.rainbow(`${num1} * ${num2}  = ${calculator.multiply(num1, num2)}`));
console.log(colors.rainbow(`${num1} / ${num2}  = ${calculator.divide(num1, num2)}`));
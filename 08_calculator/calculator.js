const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arg) {
    return arg.reduce((sum, item) => sum += item, 0);
};

const multiply = function(arg) {
    return arg.reduce((sum, item) => sum *= item);
};

const power = function(m, n) {
    return m ** n;
};

const factorial = function(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
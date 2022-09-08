const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(list) {
  let total = 0;
  for (let num of list) {
    total += num;
  }
  return total;
};

const multiply = function(list) {
  let total = 1;
  for (let num of list) {
    total *= num;
  }
  return total;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1
	for (; a > 0 ; a--) {
    total *= a;
  }
  return total;
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

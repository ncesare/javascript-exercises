// Make an array and populate it with the numbers between numOne and numTwo (inclusive). Use for loop for this.
// Use another for loop to add every number in the array.

const sumAll = function(numOne, numTwo) {
    if (
        numOne < 0 ||
        !Number.isInteger(numOne) ||
        !Number.isInteger(numTwo)
        ) {
        return "ERROR";
    }
    else if (numOne > numTwo) {
        let placeHolder = numOne;
        numOne = numTwo;
        numTwo = placeHolder;
    }

    let numRange = [];

    for (let i = numOne; i <= numTwo; i++) {
        numRange.push(i);
    }

    let sum = 0;

    for (num of numRange) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

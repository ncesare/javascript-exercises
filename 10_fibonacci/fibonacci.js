const fibonacci = function(position) {
    position = parseInt(position);

    if (position < 1) {
        return 'OOPS';
    }

    fibonacciSequence = [1, 1];

    for (let n = 2; n < position; n++) {
        fibonacciSequence.push(fibonacciSequence[n-1] + fibonacciSequence[n-2]);
    }

    console.log(fibonacciSequence);

    return fibonacciSequence[position-1];
};

// Do not edit below this line
module.exports = fibonacci;

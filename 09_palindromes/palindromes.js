const palindromes = function (string) {
    string = string.toLowerCase()
    let array = string.split('');

    array = array.filter(isLetter);

    let reverseArray = [];
    for (char of array) {
        reverseArray.unshift(char);
    }

    let reverseString = reverseArray.join('');
    console.log(reverseString)

    string = array.join('');
    console.log(string);

    if (string === reverseString) {
        return true;
    } else {
        return false;
    }
};

function isLetter(char) {
    return char.match(/[a-z]/i);
}

// Do not edit below this line
module.exports = palindromes;

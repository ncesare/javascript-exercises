const reverseString = function(string) {   
    let gnirts = [];
    for (let i = 0; i < string.length; i++)
        gnirts.unshift(string[i]);
    return gnirts.join('');;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(arr, item) {
    for (i = 1; i < arguments.length; i++) {
        item = arguments[i];
        for (const element of arr)
            if (element === item) {
                let position = arr.indexOf(element);
                arr.splice(position, 1);
            }
        }
    return arr;
    }
// Do not edit below this line
module.exports = removeFromArray;

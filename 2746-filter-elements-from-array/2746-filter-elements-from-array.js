/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arrayFilter = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            arrayFilter.push(arr[i]);
        }
    }

    return arrayFilter;
};

const array = [0,10,20,30]
const greaterThan10 = (n) => {
    return n > 10;
};

console.log(filter(array, greaterThan10));
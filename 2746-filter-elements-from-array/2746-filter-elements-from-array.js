/**
 * @param {number[]} arr
 * @param {function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example 2
const firstIndex = (array) => array[0];

const arr = [1, 2, 3];
console.log(firstIndex(arr));
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        // return n;

        for (let i = 2; i < 3; i++) {
            return n++;
        }
    };
};

createCounter(10);

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
/**
 * @param {number} n
 * @return {boolean}
 * 
 * 
 * 1    2   3   4   5   6 .. N%4
 * W    W   W   L   W   W .. L
 * 
 * 
 */
var canWinNim = function(n) {   
    // console.log( n % 4)
    return n % 4 !== 0 ? true : false;
    
};
const n = 4;
console.log(canWinNim(n))
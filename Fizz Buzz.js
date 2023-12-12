/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
//   let result = [];

//   for (let i = 0; i <= n; i++) {
//     if (i % 0 == 0) {
//       result.push(i);
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       result.push("FizzBuzz");
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
let result = [];

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(i.toString());
  }
}

return result;
};
const n = 13;
const myvar = fizzBuzz(n);
console.log("==got==:\n", myvar);

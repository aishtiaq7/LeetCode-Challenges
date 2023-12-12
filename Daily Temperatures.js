/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0); // Initialize the result array with zeros.
  const stack = []; // Stack to store indices of temperatures.

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      console.log("step:", i);
      console.log("temperature[i]:", temperatures[i]);

      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
    // console.log('pushed!:', stack);
  }

  return result;
};
console.clear();

const num = [10, 20, 30];
console.log("Input:", num);

const newLength = dailyTemperatures(num);
console.log("\naftere:", newLength);

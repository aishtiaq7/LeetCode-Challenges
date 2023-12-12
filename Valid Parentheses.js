/*
    In this problem, we used a stack to keep track of the parenthesis. 
    If we see a opening backet, we push the complement of it to the stack. 

    Until we find a closing bracket in the input. At that point, we check the 
    element with the last element of the stack by stack[stack.length-1]. 
        If they are same, we simply pop it. 
        If they are different, we return false cuz the brackets did not match. 

    Finally after the loop, we do a final check of the stack lenght to see insure
    accuracy of our solution. 

    Leetcode: https://leetcode.com/problems/valid-parentheses/
    

*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (mystr) {
  let stack = [];

  mystr.split("").forEach((element, index) => {
    console.log(`index(${index}) = ${element}`);

    if (element === "(") {
      console.log("\tpush:", ")");
      stack.push(")");
      console.log("now stack: ", stack);
    } else if (element === "[") {
      console.log("\tpush:", "]");
      stack.push("]");
      console.log("now stack: ", stack);
    } else if (element === "{") {
      console.log("\tpush:", "}");
      stack.push("}");
      console.log("now stack: ", stack);
    } else if (element !== stack[stack.length - 1]) {
      console.log(
        `\te:${element}, \tsame element NOT found!${stack[stack.length - 1]}`
      );
      return false;
    } else if (element === stack[stack.length - 1]) {
      console.log(
        `\te:${element}, \tsame element found!, so pop.`
      );
      stack.pop();
    }
  });
  return stack.length === 0;
};
const input = "()[](";
const ansBol = isValid(input);
console.log(`${input} isValid? =`, ansBol);



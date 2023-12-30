/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  console.clear();

  //chatGPT version:
  while (num >= 10) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]);
    }
    num = sum;
  }
  return num;

  // while (num >= 10) {
  //   let sum = 0;
  //   while (num > 0) {
  //     console.log(`w: `,num)
  //     sum += num % 10;
  //     num = Math.floor(num / 10);

  //   }
  //   console.log(`this: `,num)
  //   num = sum;
  // }
  // return num;
};

const n = 77;
console.log("returned:", addDigits(n));

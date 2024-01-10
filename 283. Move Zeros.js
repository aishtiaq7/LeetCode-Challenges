console.clear();

/*
    TUT: 
*/

var moveZeroes = function (nums) {
  /*
        Time complexity: O(n^2)
        Space complexity: O(1)
  */
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let j = i + 1;
//       while (j < nums.length) {
//         if (nums[j] !== 0) {
//           //swtich with j
//           [nums[i], nums[j]] = [nums[j], nums[i]];
//           break;
//         }
//         j += 1;
//       }
//     }
//   }


  /*
        Time complexity: O(n)
        Space complexity: O(1)
  */
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(`nums[${i}]: ${nums[i]}`)
    if (nums[i] !== 0) {
      console.log('switch');
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++; // Move the nonZeroIndex forward
    }
  }

  console.log("newNUMS:", nums);
};

const testingArray = [0, 0, 4];
console.log(testingArray);

moveZeroes(testingArray);

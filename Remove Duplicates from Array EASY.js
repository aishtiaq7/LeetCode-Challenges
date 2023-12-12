
/*
    - Can have at most 2
    - keep count with counter to keep max 2
    - *COUNT is less than 2 because it can have at most 2 reappearing elements,
        think about it. 
    

*/

var removeDuplicates = function (nums) {
  //   var count = 0;

  //   for (i = 0; i < nums.length; i++) {
  //     if (nums[i] !== nums[count - 2]) {
  //       nums[count] = nums[i];
  //       count++;
  //     }
  //   }
  //   console.log(num[0]);
  //   return nums;

  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    console.log('num[i]:',num[i])
    console.log(count)

    if (count < 2 || nums[i] !== nums[count - 2]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};
const num = [1, 1, 1, 2, 2, 3];
console.log("Input:", num);

const newLength = removeDuplicates(num);
console.log("\naftere:", newLength);

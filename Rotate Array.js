/**
 * Solution 2: 
 *    - POPS the last one and INSERTS it in the front unsing .unshift();
 *    - T(n): number of shifts 
 *    - Space complexity: Constant
 * 
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  console.log("k:", k);
  console.log("nums:", nums);
  console.log("len:", nums.length);

    /** Solution 2: **/
    if (k > nums.length) {
      k = k%nums.length;
    }
    for (i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
    return nums;

  /** Solution 1: **/
  // var leftItem = nums.slice(0, nums.length-k);
  // var rightItem = nums.slice(nums.length-k);
  // console.log("\nleftItem:", leftItem);
  // console.log("rightItem:", rightItem);
  // for(var i = 0; i < rightItem.length; i++) {
  //   console.log('i_righ:',i);

  //     nums[i] = rightItem[i];
  // }
  // for(var i = 0; i < leftItem.length; i++) {
  //   nums[rightItem.length + i] = leftItem[i];
  // }
  // return nums


};
console.clear();

const input = [1, 2, 3, 4, 5];

console.log("\n\ninput:", input);
const output = rotate(input, (k = 6));

console.log("\noutput:", output);

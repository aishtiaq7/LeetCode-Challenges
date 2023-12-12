/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  console.log(nums);
  let ht = {};
  // make the frequncy table for nums in ht
  for (const char in nums) {
    if (ht[nums[char]] === undefined) {
      ht[nums[char]] = 1;
    } else {
      ht[nums[char]] += 1;
    }
  }
  console.log("ht:", ht);

  // find the maxOccurance and for which element(majorityElement)
  let maxOccurance = -Infinity;
  let majorityElement = -Infinity;
  for (const [key, value] of Object.entries(ht)) {
    if (value > maxOccurance) {
      maxOccurance = value;
      majorityElement = key;
      console.log("key:", key);
    }
  }
  console.log("maxCount: ", maxOccurance);
  console.log("majorityElement: ", majorityElement);
  return majorityElement;
};

console.clear();
const nums = [1, 2, 1, 3, 1, 4, 5];
majorityElement(nums);

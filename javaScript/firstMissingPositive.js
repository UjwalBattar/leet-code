// Given an unsorted integer array, find the smallest missing
// ositive integer.
//
// Example 1:
//
// Input: [1,2,0]
// Output: 3
// Example 2:
//
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
//
// Input: [7,8,9,11,12]
// Output: 1
// Note:
//
// Your algorithm should run in O(n) time and uses constant
// extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.length) return 1;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }
  console.log(nums);

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return i + 1;
};

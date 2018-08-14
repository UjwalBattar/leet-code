// Given an array nums of n integers and an integer target,
// find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each
// input would have exactly one solution.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length <= 3) {
    return nums.reduce((acc, el) => acc + el);
  }

  let sum, result;
  sum = Number.MAX_VALUE;

  nums = nums.sort((a, b) => a - b);

  for (let curr = 0; curr < nums.length - 2; curr++) {
    let left = curr + 1;
    let right = nums.length - 1;
    while (left < right) {
      let temp = nums[curr] + nums[left] + nums[right];
      result = target - temp;
      if (Math.abs(result) < Math.abs(target - sum)) {
        sum = temp;
      }
      if (sum === target) return sum;
      if (temp > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return sum;
};

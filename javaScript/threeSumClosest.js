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

  let left, right, temp, sum, result;
  sum = Number.MAX_VALUE;

  nums = nums.sort((a, b) => a - b);

  for (let curr = 0; curr < nums.length - 2; curr++) {
    left = curr + 1;
    right = nums.length - 1;
    while (left < right) {
      temp = nums[curr] + nums[left] + nums[right];
      if (temp === target) return temp;
      result = target - temp;
      if (Math.abs(result) < Math.abs(target - sum)) {
        sum = temp;
      }
      if (temp > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return sum;
};

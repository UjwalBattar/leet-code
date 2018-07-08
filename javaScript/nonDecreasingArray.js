// Given an array with n integers, your task is to check if it could
// become non-decreasing by modifying at most 1 element.
//
// We define an array is non-decreasing if array[i] <= array[i + 1]
// holds for every i (1 <= i < n).
//
// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a
// non-decreasing array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most
// one element. Note: The n belongs to [1, 10,000].
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums.length < 3) return true;

  let mods = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      if (mods !== -1) {
        return false;
      } else {
        mods = i;
      }
    }
  }

  return (
    mods === -1 ||
    mods === 0 ||
    mods === nums.length - 2 ||
    nums[mods - 1] <= nums[mods + 1] ||
    nums[mods] <= nums[mods + 2]
  );
};

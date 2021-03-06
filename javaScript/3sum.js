// Given an array nums of n integers, are there elements a, b, c in nums
// such that a + b + c = 0? Find all unique triplets in the array which
// gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  if (nums.length < 3) return res;
  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (i === 0 || nums[i] > nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
        if (nums[i] + nums[j] + nums[k] < 0) {
          let currentStart = j;
          while (nums[j] === nums[currentStart] && j < k) {
            j++;
          }
        } else {
          let currentEnd = k;
          while (nums[k] === nums[currentEnd] && j < k) {
            k--;
          }
        }
      }
    }
  }
  return res;
};

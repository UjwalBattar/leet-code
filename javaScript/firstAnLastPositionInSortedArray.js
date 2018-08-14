// Given an array of integers nums sorted in ascending order,
// find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = findIndex(nums, target, true);
  let right = findIndex(nums, target, false) - 1;
  let res = [
    nums[left] === target ? left : -1,
    nums[right] === target ? right : -1
  ];

  return res;
};

function findIndex(nums, tgt, left) {
  let low = 0;
  let hi = nums.length;
  let mid;
  while (low < hi) {
    mid = Math.floor((low + hi) / 2);
    if (nums[mid] > tgt || (left && nums[mid] === tgt)) {
      hi = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

// Implement next permutation, which rearranges numbers into the
// lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the
// lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place and use only constant extra memory.
//
// Here are some examples. Inputs are in the left-hand column and its
// corresponding outputs are in the right-hand column.
//
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function(nums) {
//   if (nums.length <= 1) return;
//   let perm = false;
//   let endIdx = nums.length - 1;
//   let elIdx;
//   for (let i = endIdx; i > 0; i--) {
//     if (nums[i] > nums[i - 1]) {
//       elIdx = i - 1;
//
//       perm = true;
//       break;
//     }
//   }
//
//   if (perm) {
//     for (let i = endIdx; i > elIdx; i--) {
//       if (nums[i] > nums[elIdx]) {
//         [nums[i], nums[elIdx]] = [nums[elIdx], nums[i]];
//         swap(nums, elIdx + 1, endIdx);
//         break;
//       }
//     }
//   } else {
//     swap(nums, 0, endIdx);
//   }
// };
//
// function swap(nums, start, end) {
//   while (start < end) {
//     [nums[start], nums[end]] = [nums[end], nums[start]];
//     start++;
//     end--;
//   }
//   return nums;
// }

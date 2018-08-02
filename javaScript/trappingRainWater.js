// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water
// it is able to trap after raining.
//
//
// The above elevation map is represented by array
// [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being
// trapped.
//
// Example:
//
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let vol = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax ? (leftMax = height[left]) : vol += (leftMax - height[left]);
      left ++;
    } else {
      height[right] >= rightMax ? (rightMax = height[right]) : vol += (rightMax - height[right]);
      right--;
    }
  }
  return vol;
};

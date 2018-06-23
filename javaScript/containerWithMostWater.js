// Given n non-negative integers a1, a2, ..., an, where each
// represents a point at coordinate (i, ai). n vertical lines are
// drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container,
// such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxContainerArea = 0;
  let sideOneIdx = 0;
  let sideTwoIdx = height.length - 1;
  let currArea;

  while (sideOneIdx < sideTwoIdx) {
    currArea =
      Math.min(height[sideOneIdx], height[sideTwoIdx]) *
      (sideTwoIdx - sideOneIdx);
    maxContainerArea = Math.max(maxContainerArea, currArea);

    if (height[sideOneIdx] < height[sideTwoIdx]) {
      sideOneIdx++;
    } else {
      sideTwoIdx--;
    }
  }

  return maxContainerArea;
};

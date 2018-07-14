// Write a function to find the longest common prefix string
// amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  let minLength = Number.MAX_VALUE;
  for (let str of strs) {
    minLength = Math.min(minLength, str.length);
  }
  let low = 1;
  let high = minLength;

  while (low <= high) {
    let middle = (low + high) / 2;
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      high = middle + 1;
    }
  }
  return strs[0].substring(0, (low + high) / 2);
};

function isCommonPrefix(strs, len) {
  let str1 = strs[0].substring(0, len);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(str1)) return false;
  }

  return true;
}

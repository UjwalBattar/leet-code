// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > endIdx - startIdx) {
      startIdx = i - (len - 2) / 2;
      endIdx = i + len / 2;
    }
  }
  return s.slice(startIdx, endIdx + 1);
};

function expandAroundCenter(s, left, right) {
  let leftIdx = left;
  let rightIdx = right;

  while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
    leftIdx--;
    rightIdx++;
  }

  return rightIdx - leftIdx - 1;
}

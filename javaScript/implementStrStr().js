// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:
//
// 1. What should we return when needle is an empty string? This is a
// great question to ask during an interview.
//
// 2. For the purpose of this problem, we will return 0 when needle is
// an empty string. This is consistent to C's strstr() and Java's
// indexOf().
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;

  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle === haystack.slice(i, i + needle.length)) {
        return i;
      }
    }
  }
  return -1;
};

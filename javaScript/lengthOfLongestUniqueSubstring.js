// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let cHash = {};
  let longest = 0;
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (cHash[s[i]]) {
      if (cHash[s[i]] >= startIdx) {
        startIdx = cHash[s[i]] = 1;
      }
    }
    cHash[s[i]] = i;
    let length = i - startIdx + 1;

    if (length > longest) longest = length;
  }
  return longest;
};

// Given a string s consists of upper/lower-case alphabets and empty
// space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space
// characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  if (!s.length) return 0;
  let res = 0;
  let i =  s.length - 1;
  while (i >= 0) {
    let c = s[i].charCodeAt(0);
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
      res++;
      i--;
    } else {
      return res;
    }
  }
  return res;
};

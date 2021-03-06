//
// Given an input string, reverse the string word by word.
//
// Example:
//
// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:
//
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your
// reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space
// in the reversed string.

/**
 * @param {string} str
 * @returns {string}
 */

var reverseWords = function(str) {
  if (str.length <= 0) return str;
  let resArr = str.split(" ").filter(el => el != "");
  let res = "";
  for (let i = resArr.length - 1; i > 0; i--) {
    res += resArr[i];
    res += " ";
  }
  if (resArr.length > 0) {
    return (res += resArr[0]);
  } else {
    return res;
  }
};

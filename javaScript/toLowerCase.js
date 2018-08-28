// Implement function ToLowerCase() that has a string parameter str,
// and returns the same string in lowercase.
//
//
//
// Example 1:
//
// Input: "Hello"
// Output: "hello"
// Example 2:
//
// Input: "here"
// Output: "here"
// Example 3:
//
// Input: "LOVELY"
// Output: "lovely"
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = "";
  let ascii;

  for (let i = 0; i < str.length; i++) {
    ascii = str[i].charCodeAt(0);
    if (ascii <= 90 && ascii >= 65) {
      res += String.fromCharCode(ascii + 32);
    } else {
      res += str[i];
    }
  }

  return res;
};

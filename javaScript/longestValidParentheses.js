// Given a string containing just the characters '(' and ')',
// find the length of the longest valid (well-formed) parentheses
// substring.
//
// Example 1:
//
// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
// Example 2:
//
// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let count;
  const parenStack = [];

  for (let i = 0; i < s.length; i++) {
    if (parenStack.length > 0 && parenStack[-1] === s[i]) {
      parenStack.pop();
      count--;
    } else {
      if ( s[i] === "(") {
        parenStack.push(")");
      } else if (s[i] === ")") {
        parenStack.push("(");
      }
      count++;
    }
  }
  return count;
};

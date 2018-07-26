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
  let count = 0;
  const parenStack = [];

  for (let i = 0; i < s.length; i++) {
    if (parenStack[parenStack.length - 1] === s[i]) {
      parenStack.pop();
      count--;
    } else {
      if ( s[i] === "(") {
        parenStack.push(")");
        count++;
      } else if (s[i] === ")") {
        parenStack.push("(");
        count++;
      }
    }
  }
  console.log("parenStack:", parenStack.length);
  console.log("s:", s.length);
  console.log("count:", count);
  return s.length - parenStack.length;
};

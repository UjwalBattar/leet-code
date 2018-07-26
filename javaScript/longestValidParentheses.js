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
// var longestValidParentheses = function(s) {
//   let maxLength = 0;
//   let parenStack = [-1];
//
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       parenStack.push(i);
//     } else {
//       parenStack.pop();
//       if (parenStack.length === 0) {
//         parenStack.push(i);
//       } else {
//         maxLength = Math.max(maxLength, i - parenStack[parenStack.length - 1]);
//       }
//     }
//   }
//   return maxLength;
// };
var longestValidParentheses = function(s) {
  let lefts = 0;
  let rights = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      lefts++;
    } else {
      rights++;
    }

    if (lefts === rights) {
      maxLen = Math.max(maxLen, rights * 2);
    } else if (rights >= lefts) {
      lefts = rights = 0;
    }
  }

  lefts = rights = 0;
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      lefts++;
    } else {
      rights ++;
    }

    if (lefts === rights) {
      maxLen = Math.max(maxLen, lefts * 2);
    } else if (lefts >= rights) {
      lefts = rights = 0;
    }
  }
  return maxLen;
};

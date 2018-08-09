// Given n pairs of parentheses, write a function to
// generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  backtrack(n, n, '', res);
  return res;
};

function backtrack(left, right, current, res) {
  if (left > right) return;

  if (!left && ! right) return res.push(current);

  if (left) backtrack(left - 1, right, current, res);
  if (right) backtrack(left, right - 1, current, res);
}

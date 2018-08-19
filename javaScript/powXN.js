// mplement pow(x, n), which calculates x raised to the power n (xn).
//
// Example 1:
//
// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:
//
// Input: 2.10000, 3
// Output: 9.26100
// Example 3:
//
// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:
//
// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  let frac = n < 0 ? true : false;
  let e = n < 0 ? n * -1 : n;
  let sign = (x < 0 && e % 2 === 1) ? -1 : 1;
  let ans = x * myPow(x, e - 1);
  return (frac === true ? (1 / ans) : ans);
};

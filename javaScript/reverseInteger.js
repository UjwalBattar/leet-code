// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store
// integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your
// function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  let res = 0;
  let num = Math.abs(x);
  while (num > 0) {
    let rem = num % 10;
    console.log(`rem = ${rem}`);
    res = res * 10 + rem;
    console.log(`res = ${res}`);
    num = Math.floor(num / 10);
    console.log(`num = ${num}`);
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return 0;
  }

  if (x < 0) {
    return res * -1;
  } else {
    return res;
  }
};

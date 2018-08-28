// Find the smallest prime palindrome greater than or equal to N.
// Recall that a number is prime if it's only divisors are 1 and itself,
// and it is greater than 1.
// For example, 2,3,5,7,11 and 13 are primes.
// Recall that a number is a palindrome if it reads the same from left to
// right as it does from right to left.
// For example, 12321 is a palindrome.
//
// Example 1:
//
// Input: 6
// Output: 7
// Example 2:
//
// Input: 8
// Output: 11
// Example 3:
//
// Input: 13
// Output: 101
//
// Note:
//
// 1 <= N <= 10^8
// The answer is guaranteed to exist and be less than 2 * 10^8.
/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
//   let num = N;
//   while (true) {
//     if (isPalindrome(num) && isPrime(num)) {
//       return num;
//     }
//     num++;
//     if (10000000 < num && num < 100000000) {
//       num = 100000000;
//     }
//   }
// };

function isPrime(n) {
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(n) {
  n = n.toString();
  let i = 0;
  let j = n.length - 1;
  while (i <= j) {
    if (n[i] !== n[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

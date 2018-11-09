// Given two non-negative integers num1 and num2 represented as strings,
// return the product of num1 and num2, also represented as a string.
//
// Example 1:
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:
//
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */




// Works except for "123456789" * "987654321"
// var multiply = function(num1, num2) {
//     let nums = {
//         "1": 1,
//         "2": 2,
//         "3": 3,
//         "4": 4,
//         "5": 5,
//         "6": 6,
//         "7": 7,
//         "8": 8,
//         "9": 9,
//         "0": 0
//     };
//     let numOne = 0;
//     let numTwo = 0;
//     let product;
//     for (let i = 0; i < num1.length; i++) {
//         numOne += num1[i] * Math.pow(10, num1.length - i - 1);
//     }
//     for (let i = 0; i < num2.length; i++) {
//         numTwo += num2[i] * Math.pow(10, num2.length - i - 1);
//     }
//     console.log("numOne", numOne);
//     console.log("numTwo", numTwo);
//     product = numOne * numTwo;
//     return product;
//
// };

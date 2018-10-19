// Given an array of equal-length strings, check if it is possible to
// rearrange the strings in such a way that after the rearrangement
// the strings at consecutive positions would differ by exactly one
// character.
//
// Example
//
// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.
//
// All rearrangements don't satisfy the description condition.
//
// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.
//
// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.string inputArray
//
// A non-empty array of strings of lowercase letters.
//
// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.
//
// [output] boolean

function stringsRearrangement(inputArray) {
    inputArray = inputArray.sort();
    let same = 0;
    let byOne = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (differByOne(inputArray[i], inputArray[i + 1]) === 'same') {
            same++;
        } else if (differByOne(inputArray[i], inputArray[i + 1])) {
            byOne++;
        } else {
            return false;
        }
    }
}

function differByOne(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    if (count === 0) {
        return 'same';
    } else if (count === 1) {
        return true;
    } else {
        return false;
    }
}

function validArr(strArr) {
    if (!strArr.length) return true;

}

// function stringsRearrangement(inputArray) {
//   let count = 0;
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     for (let j = 0; j < inputArray[i].length; j++) {
//       if (inputArray[i][j] !== inputArray[i + 1][j]) count++;
//     }
//   }
//   console.log(count);
//   if (count === 0 || count > inputArray.length) return false;
//   if (count < inputArray.length) {
//     if (count === inputArray.length - 1) {
//       console.log("hi")
//       return true;
//     }
//   }
//   return true;
// }


// USING BACKTRACKING
// function stringsRearrangement(inputArray) {
//     inputArray = inputArray.sort();
//     let uniq = inputArray.filter((el, i) => inputArray.indexOf(el) === i);
//     if (uniq.length !== inputArray.length) {
//         if (stringsRearrangement(uniq) && inputArray.length % 2 === 1) return true;
//     }
//     let same = 0;
//     let byOne = 0;
//     for (let i = 0; i < inputArray.length - 1; i++) {
//         let proposed = [inputArray[i]];
//         let restArr = inputArray.slice(0, i)
//                             .concat(inputArray.slice(i + 1));
//         if (validArr(proposed, restArr)) return true;
//         proposed.pop();
//     }
//     return false;
// }
//
// function differByOne(a, b) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) count++;
//     }
//     if (count === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function validArr(resArr, strArr) {
//     if (!strArr.length) return true;
//     while (strArr.length) {
//         if (differByOne(resArr[resArr.length - 1], strArr[0])) {
//             resArr.push(strArr[0]);
//             strArr = strArr.slice(1);
//         } else {
//             return false;
//         }
//     }
//     return true;
// }


// SOLUTION!!!!
// function stringsRearrangement(inputArray) {
//     function differByOne(n, k) {
//         var sum = 0;
//         for (var i = 0; i < n.length; i++) {
//             if (n[i]!==k[i]) sum++;
//         }
//         return sum === 1;
//     }
//
//     function check(list, startNode) {
//         var l = list.slice();
//         return hamiltonian(l.splice(startNode,1),l);
//     }
//
//     function hamiltonian(listSorted,listRest) {
//         if (listRest.length===0) return true;
//         for (var i = 0; i < listRest.length; i++) {
//             var rest = listRest.slice();
//             var sorted = listSorted.slice();
//             if (differByOne(listRest[i],listSorted[listSorted.length-1])) {
//                 sorted.push(listRest[i]);
//                 rest.splice(i,1);
//                 if (hamiltonian(sorted, rest)) return true;
//             }
//         }
//         return false;
//     }
//
//     for (var i = 0; i < inputArray.length; i++) {
//         if (check(inputArray, i)) return true;
//     }
//     return false;
// }

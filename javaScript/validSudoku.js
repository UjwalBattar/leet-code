// Determine if a 9x9 Sudoku board is valid. Only the filled cells
// need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits
// 1-9 without repetition.
//
// The Sudoku board could be partially filled, where empty cells are
// filled with the character '.'.
//
// Example 1:
//
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:
//
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left
// corner being modified to 8. Since there are two 8's in the top
// left 3x3 sub-box, it is invalid.
// Note:
//
// A Sudoku board (partially filled) could be valid but is not
// necessarily solvable. Only the filled cells need to be validated
// according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let len = board.length;
  let rows = Array(9).fill({});
  let cols = Array(9).fill({});
  // rows[2][3] = "hello";
  // console.log("test:", rows[2][3]);
  let squares = Array(9).fill({});
  let val;
  let square;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      val = board[row][col];
      if (val === ".") continue;
      // console.log("rows: ",rows[row][val]);
      // console.log("cols:", cols[col][val]);
      if (rows[row][val] === 1) {
        console.log(rows);
        return false;
      }
      if (cols[col][val] === 1) {
        console.log(cols);
        return false;
      }

      // square = 3 * Math.floor(row/3) + (col/3);
      // console.log("squares:", squares[square][val]);
      // if (squares[square][val] === 1) return false;
      //
      rows[row][val] = 1;
      cols[col][val] = 1;
      // squares[square][val] = 1;
    }
  }
  return true;
};

isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]);
isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]);

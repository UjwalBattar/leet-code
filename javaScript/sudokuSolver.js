// Write a program to solve a Sudoku puzzle by filling the empty cells.
//
// A sudoku solution must satisfy all of the following rules:
//
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the
// 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.
//
//
// A sudoku puzzle...
//
//
// ...and its solution numbers marked in red.
//
// Note:
//
// The given board contain only digits 1-9 and the character '.'.
// You may assume that the given Sudoku puzzle will have a single
// unique solution.
// The given board size is always 9x9.
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const len = board.length;

  let rows = Array.from(Array(len), () => new Array(9));
  let cols = Array.from(Array(len), () => new Array(9));
  let squares = Array.from(Array(len), () => new Array(9));
  let val, sq;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {

      val = board[row][col];
      if (val === '.') continue;

      rows[row][val - 1] = 1;
      cols[col][val - 1] = 1;

      sq = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      squares[sq][val - 1] = 1;
    }
  }

  console.log('rows: ', rows);
  console.log('cols: ', cols);
  console.log('squares: ',squares);
};

solveSudoku([
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

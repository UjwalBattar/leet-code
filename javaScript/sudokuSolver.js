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
 function cellOptions(board, row, col) {

 }

 function cellBlock(board, row, col) {

 }

 // Get options for each cell
 // try with that input
 // recursively pass the new board and continue process
 // if options all return false, recurse to initial cell and increment
 // in the options array
 // iterate through all cells backtracking on each one
 // in the end, if true, return the tmp board filled with all inputs
let count = 0;
var solveSudoku = function(board) {
  count++;
  const len = board.length;

  let rows = new Object();
  let cols = new Object();
  let squares = new Object();
  let sqRow, sqCol;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      // count++;
      // console.log(count);
      if (board[row][col] !== '.') continue;
      board[row].forEach( el => {
        if (el !== '.') rows[el] = 1;
      });

      for (let i = 0; i < len; i++) {
        if (board[i][col] !== '.') cols[board[i][col]] = 1;
      }

      sqRow = 3 * Math.floor(row / 3);
      sqCol = 3 * Math.floor(col / 3);
      for (let r = sqRow; r < sqRow + 3; r++) {
        for (let c = sqCol; c < sqCol + 3; c++) {
          if (board[r][c] !== '.') squares[board[r][c]] = 1;
        }
      }
      let options = [];
      if (
        Object.keys(rows).length === 9 &&
        Object.keys(cols).length === 9 &&
        Object.keys(squares).length === 9
      ) {
        return console.log("..................--------done---------------------------");
      }
      for (let i = 1; i <= 9; i++) {
        if (!rows[i] && !cols[i] && !squares[i]) options.push(i);
      }
      // debugger;
      // let possibleSol = board.map(arr => arr.slice());
      options.forEach(el => {
        board[row][col] = el;
        console.log(board);
        console.log("           ----             ");
        console.log("           ----             ");
        console.log("           ----             ");
        console.log("           ----             ");
        if (solveSudoku(board)) return board;
          board[row][col] = '.';
      });
      console.log(count);
      return false;
    }
  }

  return board;
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

const blank = '.';

function solveSudoku(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] !== blank) continue;
      let options = getOptions(board, row, col);
      if (!options.length) return null;

      let proposed = board.map(arr => arr.slice());
    }
  }
}

function getOptions(board, r, c) {

}

function getBlock(board, r, c) {

}

// solveSudoku([
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]);

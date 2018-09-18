function solveSudoku(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] !== '.') continue;

      let options = getOptions(board, row, col);
      if (!options.length) return null;

      let proposed = board.slice();
      for (let i = 0; i < options.length; i++) {
        proposed[row][col] = options[i];
        console.log(proposed);
        console.log("----------");
        console.log("----------");
        console.log("----------");
        console.log("----------");
        if (solveSudoku(proposed)) return proposed;
        proposed[row][col] = '.';
      }

      return null;
    }
  }

  return board;
}

function getOptions(board, r, c) {
  let len = board.length;
  let rows = [];
  board[r].forEach(el => {
    if (el !== '.') rows.push(el);
  });
  let cols = [];
  for (let i = 0; i < len; i++) {
    if (board[i][c] !== '.') cols.push(board[i][c]);
  }
  let block = getBlock(board, r, c);

  let options = [];
  let poss = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  poss.forEach( el => {
    if (!rows.includes(el) && !cols.includes(el) && !block.includes(el)) {
      options.push(el);
    }

  });
  return options;
}

function getBlock(board, r, c) {
  let rowStart = 3 * Math.floor(r / 3);
  let colStart = 3 * Math.floor(c / 3);
  let block = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[rowStart + i][colStart + j] !== '.') {
        block.push(board[rowStart + i][colStart + j]);
      }
    }
  }
  return block;
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
//
// solveSudoku([
//   [".","1",".","2","3",".",".","4","."],
//   [".","5",".",".","4","6",".",".","."],
//   ["7",".",".",".","8",".",".","6","9"],
//   [".",".",".","8",".","7",".","3","."],
//   [".","7","9",".",".",".","8","5","."],
//   [".","6",".","5",".","1",".",".","."],
//   ["1","3",".",".","7",".",".",".","6"],
//   [".",".",".","4","5",".",".","7","."],
//   [".","8",".",".","1","3",".","2","."]
// ]);
//

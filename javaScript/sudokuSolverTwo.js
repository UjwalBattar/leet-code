function solveSudoku(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] !== '.') continue;

      let options = getOptions(board, row, col);
      if (!options.length) return null;

      let proposed = board.slice();
      for (let i = 0; i < options.length; i++) {
        proposed[row][col] = options[i];
        if (solveSudoku(proposed)) {
          return proposed;
        }
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
  if (r === 8 && c === 6) {
  }
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

var isValidSudoku = function(board) {
  let len = board.length;
  // let rows = Array(len).fill({});
  // .fill() causes an issue because all the elements the Array is filled
  // with point to the same instance of the element!!!!

  // The code below is better. Array.from() takes a mapFn which maps
  // over each of the elements
  let rows = Array.from(Array(len), () => new Object());
  let cols = Array.from(Array(len), () => new Object());
  let squares = Array.from(Array(len), () => new Object());
  let val, square;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {

      val = board[row][col];
      if (val === ".") return false;

      if (rows[row][val] === 1) return false;
      if (cols[col][val] === 1) return false;

      square = 3 * Math.floor(row/3) + Math.floor(col/3);
      if (squares[square][val] === 1) return false;

      rows[row][val] = 1;
      cols[col][val] = 1;
      squares[square][val] = 1;
    }
  }
  return true;
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

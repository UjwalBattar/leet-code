# Determine if a 9x9 Sudoku board is valid. Only the filled cells
# need to be validated according to the following rules:
#
# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the 9 3x3 sub-boxes of the grid must contain the digits
# 1-9 without repetition.
#
# The Sudoku board could be partially filled, where empty cells are
# filled with the character '.'.
#
# Example 1:
#
# Input:
# [
#   ["5","3",".",".","7",".",".",".","."],
#   ["6",".",".","1","9","5",".",".","."],
#   [".","9","8",".",".",".",".","6","."],
#   ["8",".",".",".","6",".",".",".","3"],
#   ["4",".",".","8",".","3",".",".","1"],
#   ["7",".",".",".","2",".",".",".","6"],
#   [".","6",".",".",".",".","2","8","."],
#   [".",".",".","4","1","9",".",".","5"],
#   [".",".",".",".","8",".",".","7","9"]
# ]
# Output: true
# Example 2:
#
# Input:
# [
#   ["8","3",".",".","7",".",".",".","."],
#   ["6",".",".","1","9","5",".",".","."],
#   [".","9","8",".",".",".",".","6","."],
#   ["8",".",".",".","6",".",".",".","3"],
#   ["4",".",".","8",".","3",".",".","1"],
#   ["7",".",".",".","2",".",".",".","6"],
#   [".","6",".",".",".",".","2","8","."],
#   [".",".",".","4","1","9",".",".","5"],
#   [".",".",".",".","8",".",".","7","9"]
# ]
# Output: false
# Explanation: Same as Example 1, except with the 5 in the top left
# corner being modified to 8. Since there are two 8's in the top
# left 3x3 sub-box, it is invalid.
# Note:
#
# A Sudoku board (partially filled) could be valid but is not
# necessarily solvable. Only the filled cells need to be validated
# according to the mentioned rules.
# The given board contain only digits 1-9 and the character '.'.
# The given board size is always 9x9.
# @param {Character[][]} board
# @return {Boolean}

def is_valid_sudoku(board)
  len = board.length
  rows = Array.new(len).map { {} }
  cols = Array.new(len).map { {} }
  squares = Array.new(len).map { {} }

  len.times do |row|
    len.times do |col|
      val = board[row][col]
      next if val == "."

      return false if rows[row][val] == 1
      return false if cols[col][val] == 1

      square = 3 * (row / 3) + (col / 3)
      return false if squares[square][val] == 1

      rows[row][val] = 1
      cols[col][val] = 1
      squares[square][val] = 1
    end
  end
  true
end

# is_valid_sudoku([
#   ["5","3",".",".","7",".",".",".","."],
#   ["6",".",".","1","9","5",".",".","."],
#   [".","9","8",".",".",".",".","6","."],
#   ["8",".",".",".","6",".",".",".","3"],
#   ["4",".",".","8",".","3",".",".","1"],
#   ["7",".",".",".","2",".",".",".","6"],
#   [".","6",".",".",".",".","2","8","."],
#   [".",".",".","4","1","9",".",".","5"],
#   [".",".",".",".","8",".",".","7","9"]
# ])
#
# is_valid_sudoku([
#   ["8","3",".",".","7",".",".",".","."],
#   ["6",".",".","1","9","5",".",".","."],
#   [".","9","8",".",".",".",".","6","."],
#   ["8",".",".",".","6",".",".",".","3"],
#   ["4",".",".","8",".","3",".",".","1"],
#   ["7",".",".",".","2",".",".",".","6"],
#   [".","6",".",".",".",".","2","8","."],
#   [".",".",".","4","1","9",".",".","5"],
#   [".",".",".",".","8",".",".","7","9"]
# ])
#
# is_valid_sudoku([
#   [".","8","7","6","5","4","3","2","1"],
#   ["2",".",".",".",".",".",".",".","."],
#   ["3",".",".",".",".",".",".",".","."],
#   ["4",".",".",".",".",".",".",".","."],
#   ["5",".",".",".",".",".",".",".","."],
#   ["6",".",".",".",".",".",".",".","."],
#   ["7",".",".",".",".",".",".",".","."],
#   ["8",".",".",".",".",".",".",".","."],
#   ["9",".",".",".",".",".",".",".","."]
# ])

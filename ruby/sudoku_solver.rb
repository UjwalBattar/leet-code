# Write a program to solve a Sudoku puzzle by filling the empty cells.
#
# A sudoku solution must satisfy all of the following rules:
#
# Each of the digits 1-9 must occur exactly once in each row.
# Each of the digits 1-9 must occur exactly once in each column.
# Each of the the digits 1-9 must occur exactly once in each of the
# 9 3x3 sub-boxes of the grid.
# Empty cells are indicated by the character '.'.
#
#
# A sudoku puzzle...
#
#
# ...and its solution numbers marked in red.
#
# Note:
#
# The given board contain only digits 1-9 and the character '.'.
# You may assume that the given Sudoku puzzle will have a single
# unique solution.
# The given board size is always 9x9.
# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.

BLANK = '.'

def sudoku(board)
  # find first '.'
  for i in 0...board.length
    for j in 0...board[i].length
      next unless board[i][j] == BLANK

      options = get_options(board, i, j)
      return nil if options.empty? # validity check failed, kill branch

      # put options on board individually, and recurse
      proposed = board.dup
      options.each do |v|
        proposed[i][j] = v
        return proposed if sudoku(proposed)
        proposed[i][j] = BLANK
      end

      # none of the options worked
      return nil
    end
  end

  # base case: the whole board has numbers
  board
end

def get_options(board, row, col)
  # returns the list of potential options for a particular cell based
  # on the game rules:
  # - no repeated numbers in each row
  # - no repeated numbers in a column
  # - no repeated numbers in a block

  options = [*"1".."9"] # all options
  len = board.length

  # remove the options that exist in the same row
  options -= board[row].chars.uniq

  # remove the options that exist in the same column
  column = len.times.collect {|row| board[row][col]}
  options -= column.uniq

  # remove the options that exist in the same block
  block = get_block(board, row, col)
  options -= block.uniq

  # remove blanks and return
  options -= [BLANK]
  options.map(&:to_s)
end

def get_block(board, row, col)
  # returns the entire block that the row/col falls in
  row_start = 3 * (row / 3)
  col_start = 3 * (col / 3)
  block = []

  for i in 0..2
    for j in 0..2
      block << board[row_start + i][col_start + j]
    end
  end
  block
end

board =
   ["53..7....",
    "6..195...",
    ".98....6.",
    "8...6...3",
    "4..8.3..1",
    "7...2...6",
    ".6....28.",
    "...419..5",
    "....8..79"]

puts sudoku(board).inspect

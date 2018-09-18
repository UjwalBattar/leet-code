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
# board =
#    ["53..7....",
#     "6..195...",
#     ".98....6.",
#     "8...6...3",
#     "4..8.3..1",
#     "7...2...6",
#     ".6....28.",
#     "...419..5",
#     "....8..79"]
#
# puts sudoku(board).inspect

# LEETCODE HAVING ISSUED WITH RETURNS IN THE JAVASCRIPT FILES!!!!!!!!!!!!!!!!!!!!!!

def sudoku(board)
  # find first '.'
  # validity check failed, kill branch

      # put options on board individually, and recurse

      # none of the options worked

  # base case: the whole board has numbers

end

def get_options(board, row, col)
  # returns the list of potential options for a particular cell based
  # on the game rules:
  # - no repeated numbers in each row
  # - no repeated numbers in a column
  # - no repeated numbers in a block

  # all options

  # remove the options that exist in the same row

  # remove the options that exist in the same column

  # remove the options that exist in the same block

  # remove blanks and return
end

def get_block(board, row, col)
  # returns the entire block that the row/col falls in
end

# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
#
# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
#
# Write the code that will take a string and make this conversion given a number of rows:
#
# string convert(string s, int numRows);
# Example 1:
#
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:
#
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
#
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

# @param {String} s
# @param {Integer} num_rows
# @return {String}

def convert(s, num_rows)
  
  return s if num_rows == 1

  rows = []
  direction = -1
  r = 0
  i = 0

  while i < s.length

    if rows[r] == nil
      rows[r] = ""
    end

    rows[r] << s[i]

    if r == 0 || r == num_rows - 1
      direction *= -1
    end

    r += direction
    i += 1
  end

  rows.join("")
end

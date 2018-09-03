# Initially, there is a Robot at position (0, 0). Given a sequence of
# its moves, judge if this robot makes a circle, which means it moves
# back to the original place.
#
# The move sequence is represented by a string. And each move is
# represent by a character. The valid robot moves are R (Right),
# L (Left), U (Up) and D (down). The output should be true or false
# representing whether the robot makes a circle.
#
# Example 1:
#
# Input: "UD"
# Output: true
#
#
# Example 2:
#
# Input: "LL"
# Output: false

# @param {String} moves
# @return {Boolean}

def judge_circle(moves)
  x = 0
  y = 0

  i = 0

  while i < moves.length
    if moves[i] == "L"
      x += 1
    elsif moves[i] == "R"
      x -= 1
    elsif moves[i] == "U"
      y += 1
    else
      y -= 1
    end

    i += 1
  end
  x == 0 && y == 0
end

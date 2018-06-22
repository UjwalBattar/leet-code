# Given a 32-bit signed integer, reverse digits of an integer.
#
# Example 1:
#
# Input: 123
# Output: 321
# Example 2:
#
# Input: -123
# Output: -321
# Example 3:
#
# Input: 120
# Output: 21
# Note:
# Assume we are dealing with an environment which could only store
# integers within the 32-bit signed integer range: [−231,  231 − 1].
# For the purpose of this problem, assume that your
# function returns 0 when the reversed integer overflows.

# @param {Integer} x
# @return {Integer}

def reverse(x)
  res = 0
  num = x.abs
  while num > 0
    rem = num % 10
    res = res * 10 + rem
    num = num / 10
  end

  if res > (2 ** 31) - 1 || res < -2 ** 31
     return 0
  end

  if x < 0
      return -res
  else
      return res
  end
end

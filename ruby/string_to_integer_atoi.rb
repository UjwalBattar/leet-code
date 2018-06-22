# Implement atoi which converts a string to an integer.
#
# The function first discards as many whitespace characters as necessary
# until the first non-whitespace character is found. Then, starting from
#   this character, takes an optional initial plus or minus sign followed
#   by as many numerical digits as possible, and interprets them as a
#   numerical value.
#
# The string can contain additional characters after those that form the
#  integral number, which are ignored and have no effect on the
#   behavior of this function.
#
# If the first sequence of non-whitespace characters in str is not a valid
#  integral number, or if no such sequence exists because either str is
#  empty or it contains only whitespace characters, no conversion is
#  performed.
#
# If no valid conversion could be performed, a zero value is returned.
#
# Note:
#
# Only the space character ' ' is considered as whitespace character.
# Assume we are dealing with an environment which could only store
#       integers within the 32-bit signed integer
#       range: [−231,  231 − 1]. If the numerical value is out of
#       the range of representable values,
#       INT_MAX (231 − 1) or INT_MIN (−231) is returned.
# Example 1:
#
# Input: "42"
# Output: 42
#
# Example 2:
#
# Input: "   -42"
# Output: -42
# Explanation: The first non-whitespace character is '-', which is the
#               minus sign. Then take as many numerical digits as
#               possible, which gets 42.
# Example 3:
#
# Input: "4193 with words"
# Output: 4193
# Explanation: Conversion stops at digit '3' as the next character is not
#             a numerical digit.
# Example 4:
#
# Input: "words and 987"
# Output: 0
# Explanation: The first non-whitespace character is 'w', which is not a
#               numerical digit or a +/- sign. Therefore no valid
#               conversion could be performed.
# Example 5:
#
# Input: "-91283472332"
# Output: -2147483648
# Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
#              Thefore INT_MIN (−231) is returned.
#
#
# # @param {String} str
# # @return {Integer}

# NUMS = {"0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5,
#    "6" => 6, "7" => 7, "8" => 8, "9" => 9}
# def my_atoi(str)
#   s = str.split
#   first = s[0][0]
#   unless first == "-" || first == "+" || NUMS[first]
#     return 0
#   end
#
#   negIdx = str.length
#   posIdx = str.length
#   res = 0
#   str.chars.each_with_index do |c, idx|
#     if c == "-" && idx < negIdx
#       negIdx = idx
#     elsif c == "+" && idx < posIdx
#       posIdx = idx
#     end
#
#     if NUMS[c]
#       res = res * 10 + NUMS[c]
#     end
#   end
#
#   if negIdx < posIdx
#     return -res
#   end
#   res
# end

# Couldnt solve it. Dont think this is the most efficient. Struggling with
# decimals eg -> 3.2425 should be 3

def my_atoi(str)
    nums = {"0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5,
      "6" => 6, "7" => 7, "8" => 8, "9" => 9}
  s = str.split
  # first = s[0][0]
  unless s.length > 0 && (s[0][0] == "-" || s[0][0] == "+" || nums[s[0][0]])
    return 0
  end

  negIdx = str.length
  posIdx = str.length
  res = 0
  str.chars.each_with_index do |c, idx|
    if c == "-" && idx < negIdx
      negIdx = idx
    elsif c == "+" && idx < posIdx
      posIdx = idx
    end

    if nums[c]
      res = res * 10 + nums[c]
    end
  end

  if negIdx < posIdx
    res *= -1
  end

  if res > (2 ** 31) - 1
    return (2 ** 31) - 1
  elsif res < ((-2) ** 31)
    return ((-2) ** 31)
  end

  res
end

# The count-and-say sequence is the sequence of integers with the
# first five terms as following:
#
# 1.     1
# 2.     11
# 3.     21
# 4.     1211
# 5.     111221
# 1 is read off as "one 1" or 11.
# 11 is read off as "two 1s" or 21.
# 21 is read off as "one 2, then one 1" or 1211.
# Given an integer n, generate the nth term of the count-and-say
# sequence.
#
# Note: Each term of the sequence of integers will be represented as
# a string.
#
# Example 1:
#
# Input: 1
# Output: "1"
# Example 2:
#
# Input: 4
# Output: "1211"
# @param {Integer} n
# @return {String}

def count_and_say(n)
  return "" if n < 1
  res = "1"
  i = 2
  while i <= n
    j = 0
    count = 0
    temp = ""
    while j < res.length
      char = res[j]
      count += 1
      if char != res[j + 1]
        temp += count.to_s + char
        count = 0
      end
      j += 1
    end
    i += 1
    res = temp
  end
  res
end

# count_and_say(4)

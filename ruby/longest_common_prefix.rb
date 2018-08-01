# Write a function to find the longest common prefix string
# amongst an array of strings.
#
# If there is no common prefix, return an empty string "".
#
# Example 1:
#
# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:
#
# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:
#
# All given inputs are in lowercase letters a-z.
# @param {String[]} strs
# @return {String}

def longest_common_prefix(strs)
  return "" if strs.length < 1

  minLength = strs[0].length

  strs.each {|str| minLength = [minLength, str.length].min}

  low = 0
  high = minLength

  while low <= high
    mid = (low + high) / 2
    if is_common_substring(strs, len)
      low = mid + 1
    else
      high = mid - 1
    end
  end
  strs[0][0...((low + high) / 2)]
end

def is_common_substring(strs, len)
  str1 = strs[0][0...len]

  i = 1
  while i < strs.length
    return false if strs[i][0...len] != str1
    i += 1
  end
  true
end

# Implement function ToLowerCase() that has a string parameter str,
# and returns the same string in lowercase.
#
#
#
# Example 1:
#
# Input: "Hello"
# Output: "hello"
# Example 2:
#
# Input: "here"
# Output: "here"
# Example 3:
#
# Input: "LOVELY"
# Output: "lovely"
# @param {String} str
# @return {String}

def to_lower_case(str)
  res = ""
  string.length.times do |i|
    if str[i].ord.between?(65, 90)
      res += (str[i].ord + 32).chr
    else
      res += str[i]
    end
  end
  res
end

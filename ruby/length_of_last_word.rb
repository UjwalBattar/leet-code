# Given a string s consists of upper/lower-case alphabets and empty
# space characters ' ', return the length of last word in the string.
#
# If the last word does not exist, return 0.
#
# Note: A word is defined as a character sequence consists of non-space
# characters only.
#
# Example:
#
# Input: "Hello World"
# Output: 5
# @param {String} s
# @return {Integer}

def length_of_last_word(s)
  count = 0
  i = s.length - 1
  while s[i] == " "
    i -= 1
  end
  while s[i] != " "
    count += 1
    i -= 1
  end
  count
end

# length_of_last_word("Hello World")

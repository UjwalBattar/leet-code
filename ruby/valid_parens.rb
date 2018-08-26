# Given a string containing just the characters
# '(', ')', '{', '}', '[' and ']', determine
# if the input string is valid.
#
# An input string is valid if:
#
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Note that an empty string is also considered valid.
#
# Example 1:
#
# Input: "()"
# Output: true
# Example 2:
#
# Input: "()[]{}"
# Output: true
# Example 3:
#
# Input: "(]"
# Output: false
# Example 4:
#
# Input: "([)]"
# Output: false
# Example 5:
#
# Input: "{[]}"
# Output: true
# @param {String} s
# @return {Boolean}

def is_valid(s)
  paren_stack = []

  s.length.times do |i|
    if s[i] == paren_stack[-1]
      paren_stack.pop
    elsif s[i] == "{"
      paren_stack.push("}")
    elsif s[i] == "["
      paren_stack.push("]")
    elsif s[i] == "("
      paren_stack.push(")")
    else
      paren_stack.push(s[i])
    end
  end

  paren_stack.empty?
end

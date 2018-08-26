# Given a string containing digits from 2-9 inclusive, return all
# possible letter combinations that the number could represent.
#
# A mapping of digit to letters (just like on the telephone buttons)
# is given below. Note that 1 does not map to any letters.
#
#
#
# Example:
#
# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
# Note:
#
# Although the above answer is in lexicographical order, your answer
# could be in any order you want.

CONVERSION = {
  '2' => ['a', 'b', 'c'],
  '3' => ['d', 'e', 'f'],
  '4' => ['g', 'h', 'i'],
  '5' => ['j', 'k', 'l'],
  '6' => ['m', 'n', 'o'],
  '7' => ['p', 'q', 'r', 's'],
  '8' => ['t', 'u', 'v'],
  '9' => ['w', 'x', 'y', 'z']
}.freeze

# @param {String} digits
# @return {String[]}

def letter_combinations(digits)
  return [] if digits.empty?
  return CONVERSION[digits[0]] if digits.length == 1
  last = digits.length - 1
  prev = letter_combinations(digits[0, last])
  res = []
  CONVERSION[digits[last]].length.times do |i|
    prev.each { |el| res.push(el + CONVERSION[digits[last]][i]) }
  end
  res
end

# letter_combinations("23")

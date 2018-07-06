# Validate if a given string is numeric.
#
# Some examples:
# "0" => true
# " 0.1 " => true
# "abc" => false
# "1 a" => false
# "2e10" => true
#
# Note: It is intended for the problem statement to be ambiguous.
# You should gather all requirements up front before implementing one.

# @param {String} s
# @return {Boolean}

def is_number(s)
  return Float(s) != nil rescue false
end

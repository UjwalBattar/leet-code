# Given a string, find the length of the longest substring without repeating characters.
#
# Examples:
#
# Given "abcabcbb", the answer is "abc", which the length is 3.
#
# Given "bbbbb", the answer is "b", with the length of 1.
#
# Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

# @param {String} s
# @return {Integer}

def length_of_longest_substring(s)
  c_hash = {}
  longest = 0
  start_idx = 0

  i = 0
  while i < s.length
    if c_hash[s[i]]
      if c_hash[s[i]] >= start_idx
        start_idx = c_hash[s[i]] + 1
      end
    end
    c_hash[s[i]] = i
    length = i - start_idx + 1
    longest = length if length > longest

    i += 1
  end
  longest
end

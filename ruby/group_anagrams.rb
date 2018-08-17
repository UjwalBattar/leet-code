# Given an array of strings, group anagrams together.
#
# Example:
#
# Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
# Output:
# [
#   ["ate","eat","tea"],
#   ["nat","tan"],
#   ["bat"]
# ]
# Note:
#
# All inputs will be in lowercase.
# The order of your output does not matter.
# @param {String[]} strs
# @return {String[][]}

PRIMES  = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
 97, 101];

def char_to_prime(c)
  PRIMES[c.ord - 97]
end

def string_hash(str)
  hashed = 1
  (0...str.length).each do |i|
    hashed *= char_to_prime(str[i])
  end
  hashed
end

def group_anagrams(strs)
  anagram_hash = {}
  (0...strs.length).each do |i|
    curr = strs[i]
    hashed = string_hash(curr)

    if !anagram_hash[hashed].nil?
      anagram_hash[hashed].push(curr)
    else
      anagram_hash[hashed] = [curr]
    end
  end
  anagram_hash.values
end

# group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

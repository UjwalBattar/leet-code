# Find the smallest prime palindrome greater than or equal to N.
# Recall that a number is prime if it's only divisors are 1 and itself,
# and it is greater than 1.
# For example, 2,3,5,7,11 and 13 are primes.
# Recall that a number is a palindrome if it reads the same from left to
# right as it does from right to left.
# For example, 12321 is a palindrome.
#
# Example 1:
#
# Input: 6
# Output: 7
# Example 2:
#
# Input: 8
# Output: 11
# Example 3:
#
# Input: 13
# Output: 101
#
# Note:
#
# 1 <= N <= 10^8
# The answer is guaranteed to exist and be less than 2 * 10^8.

# @param {Integer} n
# @return {Integer}

def prime_palindrome(n)
  while n < (10 ** 8)
    if is_palindrome(n)
      if is_prime(n)
        return n
      end
    end
    n += 1
  end
end

def is_palindrome(n)
  n = n.to_s
  n == n.reverse
end

def is_prime(n)
  return false if n < 2
  return true if n == 2
  i = 2
  while i <= Math.sqrt(n)
    return false if n % i == 0
    i += 1
  end
  true
end

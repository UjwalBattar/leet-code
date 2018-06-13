# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order and each of their nodes contain a single digit.
# Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.
#
# Example
#
# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}

def add_two_numbers(l1, l2)
  dummy_head = ListNode.new(0)
  p = l1
  q = l2
  curr = dummy_head
  carry = 0

  while (p != nil || q != nil)
    x = (p != nil) ? p.val : 0
    y = (q != nil) ? q.val : 0

    sum = x + y + carry
    carry = sum / 10
    curr.next = ListNode.new(sum % 10)
    curr = curr.next

    p = p.next if p != nil
    q = q.next if q != nil
  end

  if carry > 0
    curr.next = ListNode.new(carry)
  end

  return dummy_head.next
end

# Merge k sorted linked lists and return it as one sorted list.
# Analyze and describe its complexity.
#
# Example:
#
# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode[]} lists
# @return {ListNode}

def merge_k_lists(lists)
  amount = lists.length
  interval = 1

  while interval < amount
    i = 0
    while i < (amount - interval)
      lists[i] = merge_two_lists(lists[i], lists[i + interval])
      i += (interval * 2)
    end
    interval *= 2
  end

  return lists[0] if amount > 0
  return lists
end

def merge_two_lists(l1, l2)
  return l1 if l2.nil?
  return l2 if l1.nil?

  if l1.val < l2.val
    l1.next = merge_two_lists(l1.next, l2)
    return l1
  else
    l2.next = merge_two_lists(l1, l2.next)
    return l2
  end

end

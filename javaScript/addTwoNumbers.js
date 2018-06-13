// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// y??

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);

  let p = l1;
  let q = l2;
  let curr = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;

    let sum = x + y + carry;
    carry = sum / 10;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p.next !== null) p = p.next;
    if (q.next !== null) q = q.next;
  }

  if (carry > 0) curr.next = new ListNode(carry);

  return dummyHead.next;
};

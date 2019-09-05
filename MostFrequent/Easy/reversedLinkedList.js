/*Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return head;
    }
    let current = null;
    let node = head;
    
    
    while (node.next !== null) {
        let next = node.next;
        node.next = current;
        current = node;
        node = next;
    }
    node.next = current;
    return node;
};
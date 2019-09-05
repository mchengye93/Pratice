/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var node = new ListNode(-1);
    let start = node;
    while (l1 !== null && l2 !==null){
        if (l1.val < l2.val) {
            node.next=l1;
            l1 = l1.next;
            node = node.next;
        } else {
            node.next =l2;
            l2 = l2.next;
            node = node.next;
        }
    }
    while(l1 !== null) {
        node.next = l1;
        l1 = l1.next;
        node = node.next;
    }
    
    while(l2 !== null) {
        node.next = l2;
        l2 = l2.next;
        node = node.next;
    }
    return start.next;
    
};
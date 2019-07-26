/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

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
    
    
    var l1Next = l1;
    var l2Next = l2;
    var node = null;
    var newListNode = null;
    
    if (l1 === null && l2 !== null) {
        node = l2Next;
    }
        
    if (l1 !== null && l2 === null) {
        node = l1Next;
    }
    
    
    
    
    if (l1 !== null && l2 !== null) {
        if (l1Next.val <= l2Next.val) {
       newListNode = new ListNode(l1Next.val); 
        node = newListNode;
       l1Next = l1Next.next;
    } else {
        newListNode = new ListNode(l2Next.val);
        node = newListNode;
        l2Next = l2Next.next;
    }
    
        
    }
  
    //compare both listnode and see which is less and proceed until one it node.
    while (l1Next !== null && l2Next !== null) {
    
      if (l1Next.val <= l2Next.val) {
       newListNode.next = l1Next;
       newListNode = newListNode.next;
       l1Next = l1Next.next;
    } else {
        newListNode.next = l2Next;
        newListNode = newListNode.next;
        l2Next = l2Next.next;
    } 
   
        
    }
    while (l1Next !== null && l1Next.next !== null){
        newListNode.next = l1Next;
        newListNode = newListNode.next;
        l1Next = l1Next.next;
    }
    
    while (l2Next !== null && l2Next.next !== null) {
        newListNode.next = l2Next;
        newListNode = newListNode.next;
        l2Next = l2Next.next;
    }
    
    return node;
    
};
/*
Write a program to find the node at which the intersection of two singly linked 
lists begins.

For example, the following two linked lists:
Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the 
    two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, 
    it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There 
    are 3 nodes before the intersected node in B.

Example 2:
Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if 
    the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head 
    of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There 
    are 1 node before the intersected node in B.

 Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lengthA = 0;
    let lengthB = 0;

    let node = headA;

    while(node!==null) {
        lengthA++;
        node = node.next;
    }

    node = headB;

    while(node!== null) {
        lengthB++;
        node = node.next;
    }

    let diff = Math.abs(lengthA - lengthB);

    let nodeA= headA;
    let nodeB = headB;
    if (lengthA > lengthB) {

        for (let i = 0; i < diff; i++) {
            nodeA= nodeA.next;
        }
        
    } else {
        for (let i = 0; i < diff; i++) {
            nodeB= nodeB.next;
        }
    }

    while(nodeA !== null && nodeB !== null) {
        if (nodeA === nodeB) return nodeA;

        nodeA= nodeA.next;
        nodeB=nodeB.next;
    }
    return null;
};
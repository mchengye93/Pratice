/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
   let res = [];
   let stack = [];
   
   while(true) {
       //keep on going left from current node if hit null then take last node
       if (root !==null){
           stack.push(root);
           root = root.left;
       } else {
           //from last node push val and now look at node's right and repeat leftmost
           if(!stack.length)break;
           root = stack.pop();
           res.push(root.val);
           root = root.right;
           
       }
   } 
   return res;
};


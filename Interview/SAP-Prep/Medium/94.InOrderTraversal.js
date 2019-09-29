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
    var result = [];
    var inorder  = (node) => {
         if(node === null) {
        return;
    }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return result;
   
};

var inorderTraversal = function(root) {
    if(root === null) return [];
    let stack = [];
    let res = [];
    while(true) {
        
        //push root and look at root's left most first
        if (root!== null) {
            stack.push(root);
            root = root.left;
        } else {
            //if root is null we have reach leftmost val so now we check right's leftmost
            if (!stack.length) break;
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
  
};
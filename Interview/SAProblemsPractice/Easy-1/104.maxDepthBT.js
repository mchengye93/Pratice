/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down 
\to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
 * @return {number}
 */
//
var maxDepth = function(root) {
    
  function depth(root) {
      if (root === null) return 0;
      return Math.max(depth(root.left)+ 1, depth(root.right)+1);
  }
  return depth(root);
};
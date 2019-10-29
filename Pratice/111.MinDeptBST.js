/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root
 node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
var minDepth = function(root) {
    if (!root) return 0;
    let result = 1000;
    let min = (root, depth)=> {
        if (!root.left && !root.right) {
            result = Math.min(result || depth,depth);
        }
        if (root.left) min(root.left, depth + 1);
        if (root.right) min(root.right, depth + 1);

    }
    min(root, 1);
    return result;
    
    
};
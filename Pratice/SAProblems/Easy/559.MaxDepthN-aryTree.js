/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root 
node down to the farthest leaf node.

For example, given a 3-ary tree:

 
      1
    / \  \
   3  2   4
 /  \
 5   6

We should return its max depth, which is 3.

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.
*/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

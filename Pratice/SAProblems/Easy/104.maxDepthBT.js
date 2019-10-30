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
  if(!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right)+1);
    
};

var maxDepth = function(root) {
  if (root ===null) return 0;
let stack = [root];
let heightVal = [1];

let max = 0;

while(stack.length) {
  let node = stack.pop();
  let height = heightVal.pop();
  
  max = Math.max(height, max);

  if (node.left!==null) {
    stack.push(node.left);
    heightVal.push(height+1);
  }

  if(node.right!==null) {
    stack.push(node.right);
    heightVal.push(height+1);
  }
}
return max;
}
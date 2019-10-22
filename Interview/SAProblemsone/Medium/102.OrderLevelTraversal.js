/*
Given a binary tree, return the level order traversal of its nodes' values. 
(ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root ===null) return [];
  let res = [];
  let stack = [root];

  while(stack.length > 0) {
    let temp = [];
    let size = stack.length;

    for (let i = 0; i < size; i++) {
      let node = stack.shift();
      temp.push(node.val);

      if (node.left !== null) stack.push(node.left)
      if (node.right !==null) stack.push(node.right);
    }
    res.push(temp);
  }
  return res;


};




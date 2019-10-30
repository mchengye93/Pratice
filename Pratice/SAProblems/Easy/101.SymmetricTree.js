/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around 
    its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
   return isMirror(root,root);
};

let isMirror = (p,q) => {
   let pStack = [p];
   let qStack = [q];

   while (pStack.length > 0 && qStack.length > 0) {
      let pNode = pStack.pop();
      let qNode = qStack.pop();

      if (!pNode && !qNode) continue;

      if (!pNode || !qNode || pNode.val !== qNode.val) return false;

      pStack.push(pNode.left);
      pStack.push(pNode.right);

      qStack.push(qNode.right);
      qStack.push(qNode.left);

   }
   return true;
}

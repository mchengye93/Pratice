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
         let p1 = pStack.pop();
         let q1 = qStack.pop();

         if (!p1 && !q1) continue;

         if(!p1|| !q1 || p1.val !== q1.val ) return false;

         pStack.push(p1.left);
         pStack.push(p1.right);

         qStack.push(q1.right);
         qStack.push(q1.left);
     }
     return true;
 }
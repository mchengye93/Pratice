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
  
      if (root === null) return true;
      
      function symmetric(left,right) {
          if(left === null && right ===null) return true;
          if(left === null || right === null) return false;
          
          if (left.val !== right.val) return false;
          return symmetric(left.right, right.left) && symmetric(left.left,right.right);
      }
      return symmetric(root.left, root.right);
      

   
};

//Iterative solutuon to isSymettric
var isSymmetric = function(root) {
   if (root === null) return true;
   
   let queue = [];
   queue.push(root.left);
   queue.push(root.right);
   
   while(queue.length!== 0) {
       let left = queue.shift();
       let right= queue.shift();
       
       if(left === null && right === null) continue;
       if(left === null || right === null) return false;
       if(left.val !== right.val) return false;
       
       queue.push(right.left);
       queue.push(left.right);
       queue.push(left.left);
       queue.push(right.right);
       
   }
   return true;
   

   
};
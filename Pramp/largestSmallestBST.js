/*
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient
 function findLargestSmallerKey that finds the largest key in the tree that is smaller
  than num. If such a number doesn’t exist, return -1. Assume that all keys in the 
  tree are nonnegative.

Analyze the time and space complexities of your solution.
*/

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {

  
    let root = this.root;
    
    
    return findLargest(root);
    
    function findLargest(node) {
     //current key val is greater than num we go left 
    
    if (node.key > num) {
      //check if left value is less than given num
      if (node.left === null) {
        return -1;
      }
      
      return findLargest(node.left);
      
      //we go left until we find a number that is 
    }
    
    //left is less than
    if (node.key < num) {
      if (node.right === null) {
        return node.key;
      }
      return findLargest(node.right);
      
    }
      
    }
  
  }
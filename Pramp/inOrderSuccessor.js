/*
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node 
with the smallest key greater than the key of the input node (see examples below). 
Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor
 that returns the Inorder Successor of inputNode. If inputNode has no Inorder 
 Successor, return null.
*/

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
   
  //root always to left and print current , right
  //5,9,11,12,14,20,25
  
  let inOrderArr = [];
  
  
  function inOrder(node) {
    if (node === null) {
      return;
    }
    
    inOrder(node.left);
    inOrderArr.push(node);
    inOrder(node.right);
    
  }
  inOrder(this.root);
  
  for (let i = 0; i < inOrderArr.length; i++) {
    if (inOrderArr[i] === inputNode) {
      if (i+1 < inOrderArr.length) {
        return inOrderArr[i+1];
      }
    }
  }
  return null; 
}
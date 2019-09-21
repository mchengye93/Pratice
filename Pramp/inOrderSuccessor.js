BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
    // your code goes here
  
  //[5,9,11,12,14,20,25]
  
  //root always to left and print current , right
  
  //5,9,11,12,14,20,25
  
  let inOrderArr = [];
  
  
  function inOrder(node) {
    if (node === null) {
      return;
    }
    
    inOrder(node.left);
   // console.log(node.key);
    inOrderArr.push(node);

    inOrder(node.right);
   
    
  }
  inOrder(this.root);
  
  //console.log(inOrderArr);
  //console.log(inputNode.key);
  for (let i = 0; i < inOrderArr.length; i++) {
    if (inOrderArr[i] === inputNode) {
      if (i+1 < inOrderArr.length) {
       // console.log(inOrderArr[i+1]);
        return inOrderArr[i+1];
      }
    }
  }
  return null; 
}
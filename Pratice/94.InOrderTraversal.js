/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return [];
    
    let res = [];
    let stack = [];
    
    while (true) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            if (!stack.length)break;
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}
    
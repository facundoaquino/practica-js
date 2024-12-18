function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function imprimirArbol(root) {
  if (root === null) {
      return;
  }
  imprimirArbol(root.left);
  console.log(root.val);
  imprimirArbol(root.right);
}

 
const treeB = new TreeNode(4);
treeB.left = new TreeNode(2);
treeB.right = new TreeNode(7);

treeB.left.left = new TreeNode(1);
treeB.left.right = new TreeNode(3);

treeB.right.left = new TreeNode(6);
treeB.right.right = new TreeNode(9);

 

var invertTree = function(root) {
  if (root === null) {
    return null; 
}

 
let auxNode = root.left;
root.left = root.right;
root.right = auxNode;
 
invertTree(root.left);
invertTree(root.right);

return root;  
};

invertTree(treeB)

imprimirArbol(treeB);

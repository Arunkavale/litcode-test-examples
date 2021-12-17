class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySeachTree{
    constructor(value){
        this.root = new Node(value);
    }

    insert(value){
        let currentNode = this.root;
        while ( true ) {
            if(value > currentNode.value) {
                if(!currentNode.right){
                    currentNode.right = new Node(value);
                    return this;
                }
                currentNode = currentNode.right;
            } else {
                if(!currentNode.left) {
                    currentNode.left = new Node(value);
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value){
        let currentNode = this.root;
        while (true) {
            if(currentNode.value === value) return currentNode;
            if(currentNode.value < value) {
                if(!currentNode.right) return currentNode;
                currentNode = currentNode.right;
            } else {
                if(!currentNode.left) return currentNode;
                currentNode = currentNode.left;
            }
        }
    }
}

let tree = new BinarySeachTree(10);

tree.insert(12);
tree.insert(1);
tree.insert(15);
tree.insert(4);
tree.insert(20);
tree.insert(2);
// let treeData = traverse(tree.root);
console.log(JSON.stringify(tree.lookup(15)));
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

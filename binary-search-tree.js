// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of binary search tree
    this.root = null;
  }

  // helper method that calls insertNode with datat
  insert(data) {
    let newNode = new Node(data);

    // if root is null then node will be added to the tree
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find position to add new node
      this.insertNode(this.root, newNode);
    }
  }

  // helper method to insert node into tree
  // it treverses the tree and finds the correct postion to add node
  insertNode(node, newNode) {
    // if data less than node, data moves to the left
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // if data is greater than node, datat moves to the right
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // helper method that calls removeNode with data
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // method to remove node with given data
  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      // if data to be deleted is less than roots data then move to left
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      // if data to be deleted is greater than roots data then move to the right
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // if data is similar to the root's data then delete this node

      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // deleting node with two children
      // minimum node of right subtree is stored in a variable
      let temp = this.findMinNode(node.right);
      node.data = temp.data;

      node.right = this.removeNode(node.right, temp.data);
      return node;
    }
  }

  // finds the min node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left node is null then it must be min node
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // method to traverse tree inorder
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // traverse tree starting from given node
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    return this.root;
  }

  // search for node with given data
  search(node, data) {
    // if tree is empty return null
    if (node === null) {
      return null;
    }
    // if data is less than nodes data move left
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    // if data is greater than nodes data move right
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    // if data is equal to node data return node
    else return node;
  }
}

const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

let root = BST.getRootNode();

console.log("First inorder call.");
BST.inorder(root);
BST.remove(5);
root = BST.getRootNode();
console.log("5 was removed");
BST.inorder(root);
BST.remove(7);
root = BST.getRootNode();
console.log("7 was removed");
BST.inorder(root);
BST.remove(15);
console.log("15 was removed");
console.log("inorder traversal");
BST.inorder(root);
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

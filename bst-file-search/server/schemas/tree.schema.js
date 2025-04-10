class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new TreeNode(key, value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  search(key) {
    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    if (node === null) return null;
    if (key === node.key) return node.value;
    if (key < node.key) return this._searchNode(node.left, key);
    return this._searchNode(node.right, key);
  }

  toJSON() {
    return this._toJSON(this.root);
  }

  _toJSON(node) {
    if (!node) return null;
    return {
      key: node.key,
      value: node.value,
      left: this._toJSON(node.left),
      right: this._toJSON(node.right),
    };
  }
}

export default BinaryTree;

'use strict';

const nodeColor = {
  RED : 0,
  BLACK : 1
}

/**
 * Node of the red black tree
 * constructor
 * param key : Number
 * param value : Object
 * param left : Node
 * param right : Node
 * param color : Number
 */
class Node {
  constructor(key, value, left, right, color, parent) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.color = color;
    this.parent = parent;
  }

  /**
  * return Boolean
  */
  isRedNode() {
    return this.color === nodeColor.RED
  }

  /**
  * return Boolean
  */
  isBlackNode() {
    return this.color === nodeColor.BLACK
  }

  /**
  * get GrandParent of a given node
  */
  getGrandParent(node) {
    if ((node != null) && (node.parent != null)) {
      return node.parent.parent;
    } else {
      return null;
    }
  }

  /**
  * get uncle of a given node
  */
  getUncle(node) {
    let grandParent = getGrandParent(node);
    if (grandParent == null) {
      return null;
    }
    if (node.parent == node.left) {
      return grandParent.right;
    } else {
      return grandParent.left;
    }
  }
}

/**
 * constructor
 * Node of the red black tree
 * 1.Every node is either red or black
 * 2.Root and leaves are all black
 * 3.Every red node has black parent
 * 4.All simple paths from a node x to a descendant leaves of x has same black nodes
 */
class RbTree {
  constructor() {
    this.root = null;
  }

/**
  * Complexity: O(1).
  *
  * param Node node Node.
  * return Node a copy of original node
  */
  clone(node) {
    return new Node(node.key, node.value, node.left, node.right, node.color);
  }

/**
 * find value by node key
 */
  find(key) {
    let node = root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node.value
      }
    }
    return null
  }

/**
  * Complexity: O(1).
  *       y                   x
  *      / \                 / \
  *     x  Gamma   ====>   alpha y
  *   /  \                      / \
  * alpha beta               beta Gamma
  * method
  * param Node node Node.
  * return Node
  */
  rotateRight(node) {
    if (node.parent != null) {
      if (node == node.parent.left) {
        node.parent.left = node.left;
      } else {
        node.parent.right = node.left;
      }
      node.left.parent = node.parent;
      node.parent = node.left;
      if (node.left.right != null) {
        node.left.right.parent = node;
      }
      node.left = node.left.right;
      node.parent.right = node;
    } else {
      let left = this.root.left;
      this.root.left = this.root.left.right;
      left.right.parent = this.root;
      this.root.parent = left;
      left.right = this.root;
      left.parent = nil;
      this.root = left;
    }
  }

/**
  * Complexity: O(1).
  *       y                   x
  *      / \                 / \
  *     x  Gamma   <====   alpha y
  *   /  \                      / \
  * alpha beta               beta Gamma
  * method
  * param Node node Node.
  * return Node
  */
  rotateLeft(node) {
    if (node.parent != null) {
      if (node == node.parent.left) {
        node.parent.left = node.right;
      } else {
        node.parent.right = node.right;
      }
      node.right.parent = node.parent;
      node.parent = node.right;
      if (node.right.left != null) {
        node.right.left.parent = node;
      }
      node.right = node.right.left;
      node.parent.left = node;
    } else {
      let right = this.root.left;
      this.root.right = this.root.right.left;
      right.left.parent = this.root;
      this.root.parent = right;
      right.left = this.root;
      right.parent = nil;
      this.root = right;
    }
  }

/**
  * param Node node Node.
  * return Node
  */
  insert(node) {

  }
/**
  * method
  * param Node node Node.
  * return Node
  */
  remove(node) {

  }

}

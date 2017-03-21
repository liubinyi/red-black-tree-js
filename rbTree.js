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
    let y = node.right;
    node.left = y.right;
    if (y.right != null) {
      y.right.parent = node;
    }
    y.parent = node.parent;
    if (node.parent == null) {
      this.root = y;
    } elseif (node == node.parent.right) {
      node.parent.right = y
    } else {
      node.parent.left = y
    }
    y.right = node;
    node.parent = y;
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
    let y = node.left;
    node.right = y.left;
    if (y.left != null) {
      y.left.parent = node;
    }
    y.parent = node.parent;
    if (node.parent == null) {
      this.root = y;
    } elseif (node == node.parent.left) {
      node.parent.left = y
    } else {
      node.parent.right = y
    }
    y.left = node;
    node.parent = y;
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

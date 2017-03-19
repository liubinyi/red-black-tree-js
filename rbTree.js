'use strict';

const nodeColor = {
  RED : 0,
  BLACK : 1
}

/**
 * Node of the red black tree
 * @constructor
 * @param {Number} key
 * @param {Object} value
 * @param {Node} left
 * @param {Node} right
 * @param {Number} color
 */
class Node {
  constructor(key, value, left, right, color) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.color = color;
  }

  /**
  * @return {Boolean}
  */
  isRedNode() {
    return this.color === nodeColor.RED
  }

  /**
  * @return {Boolean}
  */
  isBlackNode() {
    return this.color === nodeColor.BLACK
  }
}

/**
 * Node of the red black tree
 * 1.Every node is either red or black
 * 2.Root and leaves are all black
 * 3.Every red node has black parent
 * 4.All simple paths from a node x to a descendant leaves of x has same black nodes
 * @constructor
 */
class RbTree {
  constructor() {
    this.root = null;
  }

/**
  * Complexity: O(1).
  *
  * @method
  * @param {Node} node Node.
  * @return {Node} a copy of original node
  */
  clone(node) {
    return new Node(node.key, node.value, node.left, node.right, node.color);
  }

/**
  * Complexity: O(1).
  *      B              A
  *     / \            / \
  *    A   C   ===>   D   B
  *   /\                 /\
  *  D E                E  C
  * @method
  * @param {Node} node Node.
  * @return {Node}
  */
  rotateRight(node) {

  }

/**
  * Complexity: O(1).
  *      B              A
  *     / \            / \
  *    A   C   <====  D  B
  *   /\                 /\
  *  D E                E  C
  * @method
  * @param {Node} node Node.
  * @return {Node}
  */
  rotateLeft(node) {

  }

/**
  * @method
  * @param {Node} node Node.
  * @return {Node}
  */
  insert(node) {

  }
/**
  * @method
  * @param {Node} node Node.
  * @return {Node}
  */
  remove(node) {

  }

}

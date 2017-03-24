'use strict';
import nodeColor from './color'
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
  isRed() {
    return this.color === nodeColor.RED
  }
}
export default Node;

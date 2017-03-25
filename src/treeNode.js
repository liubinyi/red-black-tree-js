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
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = null;
    this.parent = null;
  }

  /**
  * return Boolean
  */
  isRed() {
    return this.color === nodeColor.RED
  }
}
export default Node;

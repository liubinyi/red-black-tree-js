'use strict';
import Node from './treeNode'
import nodeColor from './color'

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
    return new Node(node.key, node.value, node.left, node.right, node.color, node.parent);
  }

/**
 * find value by node key
 */
  find(key) {
    let node = this.root;
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
      left.parent = null;
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
    // if (node.parent != null) {
    //   if (node == node.parent.left) {
    //     node.parent.left = node.right;
    //   } else {
    //     node.parent.right = node.right;
    //   }
    //   node.right.parent = node.parent;
    //   node.parent = node.right;
    //   if (node.right.left != null) {
    //     node.right.left.parent = node;
    //   }
    //   node.right = node.right.left;
    //   node.parent.left = node;
    // } else {
    //   let right = this.root.right;
    //   this.root.right = this.root.right.left;
    //   right.left.parent = this.root;
    //   this.root.parent = right;
    //   right.left = this.root;
    //   right.parent = nil;
    //   this.root = right;
    // }
    let y = node.right;
    node.right = y.left;
    if (y.left != null) {
      y.left.parent = node;
    }
    y.parent = node.parent;
    if (node.parent == null) {
      this.root = y;
    } else {
      if (node == node.parent.left) {
        node.parent.left = y;
      } else {
        node.parent.right = y;
      }
    }
    y.left = node;
    node.parent = y;
  }

/**
  * param Node node Node.
  * return Node
  */
  insert(key, value) {
    let node = new Node(key, value);
    let temp = this.root;
    if (this.root == null) {
      this.root = node;
      node.color = nodeColor.BLACK;
      node.parent = null;
    } else {
      node.color = nodeColor.RED;
      while (true) {
        if (node.key < temp.key) {
          if (temp.left == null) {
              temp.left = node;
              node.parent = temp;
              break;
          } else {
              temp = temp.left;
          }
        } else if (node.key >= temp.key) {
          if (temp.right == null) {
              temp.right = node;
              node.parent = temp;
              break;
          } else {
              temp = temp.right;
          }
        }
      }
      this.fixTree(node);
    }
  }

/**
* A method to fix RB TREE
*/
//nodeColor.RED
  fixTree(node) {
    while (node.parent != null && node.parent.color == nodeColor.RED) {
      let uncle = null;
      if (node.parent == node.parent.parent.left) {
          uncle = node.parent.parent.right;

          if (uncle != null && uncle.color == nodeColor.RED) {
              node.parent.color = nodeColor.BLACK;
              uncle.color = nodeColor.BLACK;
              node.parent.parent.color = nodeColor.RED;
              node = node.parent.parent;
              continue;
          }
          if (node == node.parent.right) {
              //Double rotation needed
              node = node.parent;
              this.rotateLeft(node);
          }
          node.parent.color = nodeColor.BLACK;
          node.parent.parent.color = nodeColor.RED;
          //if the "else if" code hasn't executed, this
          //is a case where we only need a single rotation
          this.rotateRight(node.parent.parent);
      } else {
          uncle = node.parent.parent.left;
           if (uncle != null && uncle.color == nodeColor.RED) {
              node.parent.color = nodeColor.BLACK;
              uncle.color = nodeColor.BLACK;
              node.parent.parent.color = nodeColor.RED;
              node = node.parent.parent;
              continue;
          }
          if (node == node.parent.left) {
              //Double rotation needed
              node = node.parent;
              this.rotateRight(node);
          }
          node.parent.color = nodeColor.BLACK;
          node.parent.parent.color = nodeColor.RED;
          //if the "else if" code hasn't executed, this
          //is a case where we only need a single rotation
          this.rotateLeft(node.parent.parent);
      }
  }
  this.root.color = nodeColor.BLACK;
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
    let grandParent = this.getGrandParent(node);
    if (grandParent == null) {
      return null;
    }
    if (node.parent == node.left) {
      return grandParent.right;
    } else {
      return grandParent.left;
    }
  }

  findHeight(node) {
    if (node == null) {
      return -1;
    }
    let leftLen = this.findHeight(node.left);
    let rightLen = this.findHeight(node.right);

    if (leftLen > rightLen) {
      return leftLen + 1;
    }
    return rightLen + 1;
  }

  print() {
    let height = this.findHeight(this.root) + 1;
    this.printHelper(this.root, "*", height);
  }

  // generateIndent(n, indent) {
  //   let finalIndent = "";
  //   for (var i = 0; i < n; i++) {
  //     finalIndent += indent;
  //   }
  //   return finalIndent;
  // }

  printHelper(node, indent, height) {
    let output = "";
    //tree height
    let treeHeight = height;

    if (node == null) {
      return
    }
    if (node == this.root) {
      output += node.key + "\n"
      //console.log(node.key);
    }
    if (node.left != null) {
      output += node.left.key;
      //console.log(indent + node.left.key);
    }
    if (node.right != null) {
      output += node.right.key
      //console.log(indent + node.right.key);
    }
    treeHeight -= 1;
    console.log(output);
    this.printHelper(node.left, indent, treeHeight);
    this.printHelper(node.right, indent, treeHeight);
  }

/**
  * method
  * param Node node Node.
  * return Node
  */
  remove(node) {

  }

}
export default RbTree;

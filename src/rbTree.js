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

  findNode(key) {
    let node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
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

    let y = node.left;
    node.left = y.right;
    if (y.right != null) {
      y.right.parent = node;
    }
    y.parent = node.parent;
    if (node.parent == null) {
      this.root = y;
    } else {
      if (node == node.parent.right) {
        node.parent.right = y;
      } else {
        node.parent.left = y;
      }
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
  * Make the color of newly inserted nodes as RED and then perform standard BST insertion
  * If x is root, change color of node as BLACK (Black height +1).
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
        } else {
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
* when uncle is RED
* Change color of parent and uncle as BLACK.
* Color of grand parent as RED.
* Change node = node’s grandparent, repeat steps 2 and 3 for new x.
* ---------------------------------------------------------------
* when uncle is BLACK
* left_left_case
* left_right_case
* right_right_case
* right_left_case
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
  * return the height of a tree
  */
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

  /**
  * print out current tree
  */
  print() {
    let height = this.findHeight(this.root) + 1;
    this.printHelper(this.root, "___", height);
  }

  printHelper(node, indent, height) {
    let output = "";
    //tree height
    let treeHeight = height;

    if (node == null) {
      return
    }
    if (node == this.root) {
      // output += node.key + "\n"
      console.log(node.key);
    }
    if (node.left != null) {
      // output += node.left.key;
      console.log(indent + node.left.key + "(parent node " + node.left.parent.key + ")");
    }
    if (node.right != null) {
      // output += node.right.key
      console.log(indent + node.right.key + "(parent node " + node.right.parent.key + ")");
    }
    treeHeight -= 1;
    //console.log(output);
    this.printHelper(node.left, indent+indent, treeHeight);
    this.printHelper(node.right, indent+indent, treeHeight);
  }

  /**
  * remove all nodes inside the tree
  */
  emptyTree() {
    this.root = null;
  }

  /**
  * return the min node of a given tree
  */
  min(node) {
    if (node == null || node == undefined) {
      return {};
    }
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  // transplant(u, v) {
  //   if (u.parent == null) {
  //     this.root = v;
  //   } else if(u == u.parent.left) {
  //     u.parent.left = v;
  //   } else {
  //     u.parent.right = v;
  //   }
  //   v.parent = u.parent;
  // }

/**
  * method
  * param Node node Node.
  * return Node
  */
  // remove(key) {
  //   let z = this.findNode(key);
  //   if (z == null) {
  //     return;
  //   }
  //   let x;
  //   let y = z;
  //   let y_original_color = y.color;
  //   if (z.left == null) {
  //     x = z.right;
  //     this.transplant(z, z.right);
  //   } else if (z.right == null) {
  //     x = z.left;
  //     this.transplant(z, z.left);
  //   } else {
  //     y = this.min(z.right);
  //     y_original_color = y.color;
  //     x = y.right;
  //     if (y.parent == z) {
  //       if (x == null) {
  //         x = new Node(null, null);
  //         x.color = nodeColor.BLACK;
  //       }
  //       x.parent = y;
  //     } else {
  //       this.transplant(y, y.right);
  //       y.right = z.right;
  //       if (y.right != null) {
  //         y.right.parent = y;
  //       }
  //     }
  //     this.transplant(z, y);
  //     y.left = z.left;
  //     y.left.parent = y;
  //     y.color = z.color;
  //   }
  //   if (y_original_color == nodeColor.BLACK) {
  //     this.removeFix(x);
  //   }
  //   return;
  // }

/**
 * a method to fix remove key
 */
  // removeFix(node) {
  //   while(node != this.root && node.color == nodeColor.BLACK) {
  //     if (node == node.parent.left) {
  //       let w = node.parent.right;
  //       if (w.color == nodeColor.RED) {
  //         w.color = nodeColor.BLACK;
  //         node.parent.color = nodeColor.RED;
  //         rotateLeft(node.parent);
  //         w = node.parent.right;
  //       }
  //       if (w.left.color == nodeColor.BLACK && w.right.color == nodeColor.BLACK) {
  //         w.color = nodeColor.RED;
  //         node = node.parent;
  //         continue;
  //       } else if (w.right.color == nodeColor.BLACK) {
  //         w.left.color = nodeColor.BLACK;
  //         w.color = nodeColor.RED;
  //         w = node.parent.right;
  //       }
  //       if (w.right.color == nodeColor.RED) {
  //         w.color = node.parent.color;
  //         node.parent.color = nodeColor.BLACK;
  //         w.right.color = nodeColor.BLACK;
  //         rotateLeft(node.parent);
  //         node = root;
  //       }
  //     } else {
  //       let w = node.parent.left;
  //
  //       if (w.color = nodeColor.RED) {
  //         w.color = nodeColor.BLACK;
  //         node.parent.color = nodeColor.RED;
  //         this.rotateRight(node.parent);
  //         w = node.parent.left;
  //       }
  //       if (w.right.color == nodeColor.BLACK && w.left.color == nodeColor.BLACK) {
  //         w.color = nodeColor.RED;
  //         node = node.parent;
  //         continue;
  //       } else if (w.left.color == nodeColor.BLACK) {
  //         w.right.color = nodeColor.BLACK;
  //         w.color = nodeColor.RED;
  //         this.rotateLeft(w);
  //         w = node.parent.left;
  //       }
  //       if (w.left.color = nodeColor.RED) {
  //         w.color = x.parent.color;
  //         x.parent.color = nodeColor.BLACK;
  //         w.left.color = nodeColor.BLACK;
  //         this.rotateRight(node.parent);
  //         node = root;
  //       }
  //     }
  //   }
  //   node.color = nodeColor.BLACK;
  // }
}
export default RbTree;

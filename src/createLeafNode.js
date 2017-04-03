'use strict';
import Node from './treeNode';
import nodeColor from './color'

function createLeafNode(parent) {
  let node = new Node(null, null);
  node.color = nodeColor.BLACK;
  node.parent = parent;
  return node;
}

export default createLeafNode;

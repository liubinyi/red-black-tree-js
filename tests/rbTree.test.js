/**
* this file contains tests for rbTree
*/
import prettyFormat from 'pretty-format'
import RbTree from "../src/RbTree";
import Node from '../src/treeNode'
import nodeColor from '../src/color'

let rbTree

beforeEach(() => {
  rbTree = new RbTree();
  return rbTree;
})

test('rbTree constructor', () => {
  expect(rbTree).toMatchObject({ root: null });
});

test('rbTree find() non existing key', () => {
  expect(rbTree.find(1)).toBe(null);
});

test('rbTree find() existing key', () => {
  let node_1 = new Node(1, "abc", null, null, null, null)
  let node_2 = new Node(2, "foo", null, null, null, null)
  rbTree.insert(node_1);
  rbTree.insert(node_2);
  expect(rbTree.find(2)).toBe("foo");
});
//
// test('rbTree clone()', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree rotateRight()', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree rotateLeft()', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree getGrandParent()', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree getUncle()', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });

test('rbTree insert() root', () => {
  let root = new Node(1, "abc", null, null, null, null)
  rbTree.insert(root);
  let expectedTree = {
    "root": {
      "color": 1,
      "key": 1,
      "left": null,
      "parent": null,
      "right": null,
      "value": "abc",
    },
  }
  expect(rbTree).toMatchObject(expectedTree);
});

test('rbTree insert() five nodes', () => {

  let node_1 = new Node(1, "abc", null, null, null, null)
  let node_2 = new Node(2, "foo", null, null, null, null)
  let node_3 = new Node(3, "bar", null, null, null, null)
  let node_4 = new Node(4, "test", null, null, null, null)
  let node_5 = new Node(5, "foofoo", null, null, null, null)

  rbTree.insert(node_1);
  rbTree.insert(node_2);
  rbTree.insert(node_3);
  rbTree.insert(node_4);
  rbTree.insert(node_5);

  expect(rbTree.root.key).toBe(2);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.right.key).toBe(4);
  expect(rbTree.root.right.left.key).toBe(3);
  expect(rbTree.root.right.right.key).toBe(5);

  expect(rbTree.root.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.left.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.left.color).toBe(nodeColor.RED);
  expect(rbTree.root.right.right.color).toBe(nodeColor.RED);

});

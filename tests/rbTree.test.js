/**
* this file contains tests for rbTree
*/
import prettyFormat from 'pretty-format'
import RbTree from "../src/RbTree";
import Node from '../src/treeNode'
import nodeColor from '../src/color'

let rbTree;

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

test('rbTree find() existing key right side', () => {
  let node_1 = new Node(1, "abc");
  let node_2 = new Node(2, "foo");
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  expect(rbTree.find(2)).toBe("foo");
});

test('rbTree find() existing key left side', () => {
  let node_1 = new Node(1, "abc");
  let node_2 = new Node(2, "foo");
  let node_3 = new Node(3, "bar");
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  expect(rbTree.find(3)).toBe("bar");
});

test('rbTree find() existing key root', () => {
  let node_1 = new Node(1, "abc");
  let node_2 = new Node(2, "foo");
  let node_3 = new Node(3, "bar");
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  expect(rbTree.find(1)).toBe("abc");
});

test('rbTree clone()', () => {
  let node_1 = new Node(1, "abc")
  expect(rbTree.clone(node_1)).toMatchObject(node_1);
});

test('rbTree insert() root', () => {
  rbTree.insert(1, "abc");
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

  //insert five nodes
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  rbTree.insert(4, "test");
  rbTree.insert(5, "foofoo");

  //check if keys are in the right place
  expect(rbTree.root.key).toBe(2);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.right.key).toBe(4);
  expect(rbTree.root.right.left.key).toBe(3);
  expect(rbTree.root.right.right.key).toBe(5);

  //check if values are in the right place
  expect(rbTree.root.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.left.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.left.color).toBe(nodeColor.RED);
  expect(rbTree.root.right.right.color).toBe(nodeColor.RED);

});


// test('rbTree insert() case 2', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree insert() case 3', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree insert() case 4', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree insert() case 5', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });
//
// test('rbTree insert() case 6', () => {
//   expect(rbTree).toMatchObject({ root: null });
// });

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

  for (var i = 1; i < 8; i++) {
    rbTree.insert(i, i + " red");
  }

  //check if keys are in the right place
  expect(rbTree.root.key).toBe(2);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.left.left).toBe(null);
  expect(rbTree.root.left.right).toBe(null);
  expect(rbTree.root.right.key).toBe(4);
  expect(rbTree.root.right.left.key).toBe(3);
  expect(rbTree.root.right.right.key).toBe(6);
  expect(rbTree.root.right.right.left.key).toBe(5);
  expect(rbTree.root.right.right.right.key).toBe(7);

  //check if values are in the right place
  expect(rbTree.root.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.left.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.color).toBe(nodeColor.RED);
  expect(rbTree.root.right.left.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.right.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.right.left.color).toBe(nodeColor.RED);
  expect(rbTree.root.right.right.right.color).toBe(nodeColor.RED);
});

test('rbTree insert() right rotate', () => {

  rbTree.insert(12, "abc");
  rbTree.insert(7, "foo");
  rbTree.insert(1, "bar");
  rbTree.insert(0, "bar");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  rbTree.insert(4, "bar");
  rbTree.insert(5, "bar");
  rbTree.insert(6, "bar");
  rbTree.insert(11, "bar");
  rbTree.insert(10, "bar");
  rbTree.insert(9, "bar");
  rbTree.insert(8, "bar");

  expect(rbTree.root.key).toBe(3);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.left.left.key).toBe(0);
  expect(rbTree.root.left.right.key).toBe(2);

  expect(rbTree.root.right.key).toBe(7);
  expect(rbTree.root.right.left.key).toBe(5);
  expect(rbTree.root.right.left.left.key).toBe(4);
  expect(rbTree.root.right.left.right.key).toBe(6);
  expect(rbTree.root.right.right.key).toBe(11);
  expect(rbTree.root.right.right.left.key).toBe(9);
  expect(rbTree.root.right.right.right.key).toBe(12);
  expect(rbTree.root.right.right.left.left.key).toBe(8);
  expect(rbTree.root.right.right.left.right.key).toBe(10);
  rbTree.print();
});

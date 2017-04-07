/**
* this file contains tests for rbTree
*/
import prettyFormat from 'pretty-format'
import RbTree from "../src/rbTree";
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

test('rbTree emptyTree() non existing key', () => {
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.emptyTree();
  expect(rbTree.root).toBe(null);
});

test('rbTree find() existing key right side', () => {
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  expect(rbTree.find(2)).toBe("foo");
});

test('rbTree find() existing key left side', () => {
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  expect(rbTree.find(3)).toBe("bar");
});

test('rbTree find() existing key root', () => {
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  expect(rbTree.find(1)).toBe("abc");
});

test('rbTree clone()', () => {
  let node_1 = new Node(1, "abc")
  expect(rbTree.clone(node_1)).toMatchObject(node_1);
});

test('rbTree min() non-null case', () => {
  rbTree.insert(1, "abc");
  rbTree.insert(2, "foo");
  rbTree.insert(3, "bar");
  expect(rbTree.min(rbTree.root).key).toBe(1);
});

test('rbTree min() null case', () => {
  expect(rbTree.min(null)).toMatchObject({});
  expect(rbTree.min()).toMatchObject({});
});

test('rbTree insert() root', () => {
  rbTree.insert(1, "abc");

  expect(rbTree.root.key).toBe(1);
  expect(rbTree.root.value).toBe("abc");

  expect(rbTree.root.left.key).toBe(null);
  expect(rbTree.root.left.value).toBe(null);
  expect(rbTree.root.left.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.left.left).toBe(null);
  expect(rbTree.root.left.right).toBe(null);

  expect(rbTree.root.right.key).toBe(null);
  expect(rbTree.root.right.value).toBe(null);
  expect(rbTree.root.right.color).toBe(nodeColor.BLACK);
  expect(rbTree.root.right.left).toBe(null);
  expect(rbTree.root.right.right).toBe(null);
});

test('rbTree insert() five nodes', () => {

  for (var i = 1; i < 8; i++) {
    rbTree.insert(i, i + " red");
  }

  //check if keys are in the right place
  expect(rbTree.root.key).toBe(2);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.left.left.key).toBe(null);
  expect(rbTree.root.left.right.key).toBe(null);
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
//
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

});


//right left case
test('rbTree insert()', () => {

  rbTree.insert(10, "abc");
  rbTree.insert(9, "foo");
  rbTree.insert(27, "bar");
  rbTree.insert(25, "bar");
  rbTree.insert(28, "bar");
  rbTree.insert(29, "bar");
  rbTree.insert(24, "bar");
  rbTree.insert(26, "bar");
  rbTree.insert(23, "bar");

  expect(rbTree.root.key).toBe(25);
  expect(rbTree.root.left.key).toBe(10);
  expect(rbTree.root.left.left.key).toBe(9);
  expect(rbTree.root.left.right.key).toBe(24);
  expect(rbTree.root.left.right.left.key).toBe(23);

  expect(rbTree.root.right.key).toBe(27);
  expect(rbTree.root.right.left.key).toBe(26);
  expect(rbTree.root.right.right.key).toBe(28);
  expect(rbTree.root.right.right.right.key).toBe(29);
});

test('rbTree delete() case 1', () => {

  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(31, "bar");
  rbTree.insert(50, "bar");
  rbTree.insert(32, "bar");

  rbTree.remove(40);

  expect(rbTree.root.key).toBe(30);
  expect(rbTree.root.left.key).toBe(20);
  expect(rbTree.root.right.key).toBe(32);
  expect(rbTree.root.right.left.key).toBe(31);
  expect(rbTree.root.right.right.key).toBe(50);
});

test('rbTree findNode() by key ', () => {

  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(31, "bar");
  rbTree.insert(50, "bar");
  rbTree.insert(32, "bar");

  expect(rbTree.findNode(40).key).toBe(40);
  expect(rbTree.findNode(30).key).toBe(30);
  expect(rbTree.findNode(20).key).toBe(20);
  expect(rbTree.findNode(100)).toBe(null);
});

test('rbTree delete() non-existing node', () => {
  rbTree.insert(30, "abc");
  rbTree.remove(0);
  expect(rbTree.root.key).toBe(30);
});

test('rbTree delete() simple case', () => {
  rbTree.insert(30, "abc");
  rbTree.remove(30);
  expect(rbTree.root.key).toBe(null);
});

test('rbTree delete() left side simple case ', () => {
  rbTree.insert(30, "abc");
  rbTree.insert(20, "abc");
  rbTree.remove(20);
  expect(rbTree.root.left.key).toBe(null);
  expect(rbTree.root.right.key).toBe(null);
});

test('rbTree delete() right side simple case ', () => {
  rbTree.insert(30, "abc");
  rbTree.insert(40, "abc");
  rbTree.remove(40);
  expect(rbTree.root.left.key).toBe(null);
  expect(rbTree.root.right.key).toBe(null);
});

test('rbTree delete() simple case', () => {

  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(10, "bar");
  rbTree.remove(20);

  expect(rbTree.root.key).toBe(30);
  expect(rbTree.root.left.key).toBe(10);
  expect(rbTree.root.right.key).toBe(40);
});


test('rbTree delete() current node u is double black and it is not root', () => {

  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(35, "bar");
  rbTree.insert(50, "bar");

  rbTree.remove(20);
  expect(rbTree.root.key).toBe(40);
  expect(rbTree.root.left.key).toBe(30);
  expect(rbTree.root.right.key).toBe(50);
  expect(rbTree.root.left.right.key).toBe(35);
});

test('rbTree delete() another case', () => {

  rbTree.insert(6, "abc");
  rbTree.insert(4, "foo");
  rbTree.insert(7, "bar");
  rbTree.insert(2, "bar");
  rbTree.insert(5, "bar");

  rbTree.remove(7);

  expect(rbTree.root.key).toBe(4);
  expect(rbTree.root.left.key).toBe(2);
  expect(rbTree.root.right.key).toBe(6);
  expect(rbTree.root.right.left.key).toBe(5);
});

test('rbTree delete() case 1 left', () => {

  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(17, "bar");
  rbTree.insert(26, "bar");
  rbTree.insert(18, "bar");

  rbTree.remove(40);

  expect(rbTree.root.key).toBe(20);
  expect(rbTree.root.left.key).toBe(17);
  expect(rbTree.root.right.key).toBe(30);
  expect(rbTree.root.left.right.key).toBe(18);
  expect(rbTree.root.right.left.key).toBe(26);
  //rbTree.print();

});

//need more testing
test('rbTree delete() case', () => {

  rbTree.insert(10, "abc");
  rbTree.insert(9, "foo");
  rbTree.insert(27, "bar");
  rbTree.insert(25, "bar");
  rbTree.insert(28, "bar");
  rbTree.insert(29, "bar");
  rbTree.insert(24, "bar");
  rbTree.insert(26, "bar");
  rbTree.insert(23, "bar");
  // rbTree.print();
  rbTree.remove(25);

  expect(rbTree.root.key).toBe(26);
  expect(rbTree.root.left.key).toBe(10);
  expect(rbTree.root.right.key).toBe(28);
  expect(rbTree.root.left.left.key).toBe(9);
  expect(rbTree.root.left.right.key).toBe(24);
  expect(rbTree.root.left.right.left.key).toBe(23);

  expect(rbTree.root.right.left.key).toBe(27);
  expect(rbTree.root.right.right.key).toBe(29);
  //rbTree.print();
});


//the delete algorithm looks for next highest node by going right then left in the code
//but in "Red Black Tree Visualizer" it goes left then right to get one lower value node
//which will replace the deleted node. will come back later
test('rbTree delete() more case', () => {

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

  rbTree.remove(12);
  rbTree.remove(7);

  expect(rbTree.root.key).toBe(3);
  expect(rbTree.root.left.key).toBe(1);
  expect(rbTree.root.right.key).toBe(8);
  expect(rbTree.root.left.left.key).toBe(0);
  expect(rbTree.root.left.right.key).toBe(2);
  expect(rbTree.root.right.left.key).toBe(5);
  expect(rbTree.root.right.right.key).toBe(11);
  expect(rbTree.root.right.right.left.key).toBe(9);
  expect(rbTree.root.right.right.left.right.key).toBe(10);
  expect(rbTree.root.right.left.left.key).toBe(4);
  expect(rbTree.root.right.left.right.key).toBe(6);


  rbTree.print();

});

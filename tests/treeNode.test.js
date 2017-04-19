import Node from '../src/treeNode';
import nodeColor from '../src/color';

let node;

beforeEach(() => {
  node = new Node(1, "abc");
  return node;
})

test('Node isRed false', () => {
  node.color = nodeColor.BLACK;
  expect(node.isRed()).toBe(false);
});

test('Node isRed true', () => {
  node.color = nodeColor.RED;
  expect(node.isRed()).toBe(true);
});

test('Node getValue()', () => {
  const expected = {
    key: 1,
    value: "abc",
  }
  expect(node.getValue()).toMatchObject(expected);
});

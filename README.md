[![Build Status](https://travis-ci.org/liubinyi/red-black-tree-js.svg?branch=master)](https://travis-ci.org/liubinyi/red-black-tree-js)
[![Coverage Status](https://coveralls.io/repos/github/liubinyi/red-black-tree-js/badge.svg?branch=master)](https://coveralls.io/github/liubinyi/red-black-tree-js?branch=master)


# A javascript implementation of red-black-tree using ES6

### npm link  
* https://www.npmjs.com/package/red-black-tree-js  

### npm install  
``` npm i red-black-tree-js ```  

### Thanks for using it!  


### usage  
```javascript
import RbTree from "red-black-tree-js"


const rbTree = new RbTree();
rbTree.insert(1, "foo");
rbTree.insert(2, "bar");
rbTree.insert(3, "bar");
rbTree.insert(4, "bar");
rbTree.insert(5, "bar");
rbTree.insert(6, "bar");
rbTree.remove(6);

const iterator = rbTree.createIterator();

let result = [];
while (iterator.hasNext()) {
  result.push(iterator.next());
}

```  

### Reference
* https://www.cs.usfca.edu/~galles/visualization/RedBlack.html visualization  
* https://en.wikipedia.org/wiki/Red%E2%80%93black_tree  wiki  

### OverView
* data structure

| nodeColor | value |
| --------- | ----- |
| BLACK     |  1    |
| RED       |  0    |

| Node | LeafNode |  
| ---- | -------- |  
| *left* | *left(null)* |  
| *right* | *right(null)* |  
| *parent* | *parent(null)* |  
| *key* | *key(null)* |  
| *value* | *value(null)* |  
| *color* | *color(black)* |  

### API  
* create RB TREE  
``` let rbTree = new RbTree() ```  
create a red black tree with root = null   

* find  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const value = rbTree.find(2);

  value is "bar"
  Look up value by it's key
```      
* iterator()
return the next smallest number

```javascript
  rbTree.insert(30, "abc");
  rbTree.insert(20, "foo");
  rbTree.insert(40, "bar");
  rbTree.insert(10, "bar");
  const iterator = rbTree.createIterator();

  let result = [];
  while (iterator.hasNext()) {
    result.push(iterator.next());
  }

```    

* findNode(key)    
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const node = rbTree.findNode(2);

  return the node object
```   

* update(key, value)    
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");

  rbTree.update(2, "updated")

  now the value is "updated"
```  

* insert(key, value)    
```rbTree.insert(1, "abc")```
insert a key and a value to a node   

* remove(key)    
```rbTree.remove(1)```  
remove a node by its key  

* print()    
```javascript
   rbTree.insert(30, "abc");
   rbTree.insert(20, "foo");
   rbTree.insert(40, "bar");
   rbTree.insert(10, "bar");
   rbTree.print();

   30 color: 1
   ___20 color: 0 (parent node 30)
   ___40 color: 0 (parent node 30)
   ______null color: 1 (parent node 20)
   ______null color: 1 (parent node 20)
   ______null color: 1 (parent node 40)
   ______null color: 1 (parent node 40)

```
print out the current tree in a good format  

* inOrderSucc(node)
```javascript
  const rbTree = new RbTree();
  rbTree.insert(2, "foo");
  rbTree.insert(1, "bar");
  rbTree.insert(3, "bar");

  let next = rbTree.inOrderSucc(rbTree.root)
  console.log(next)
  {key : 3, value: "bar"}

```  

* toSortedArray()  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const array = rbTree.toSortedArray();

  array is [Object, Object, Object]
  return a sorted array of objects that contains key and value
```  

* toArrayPreOrder()  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(3, "abc");
  rbTree.insert(4, "abc");
  rbTree.insert(1, "foo");
  rbTree.insert(0, "bar");
  rbTree.insert(2, "bar");
  const array = rbTree.toArrayPreOrder();

  array is [Object, Object, Object, Object, Object]
  return an array of objects that contains key and value
  the key order is [3, 1, 0, 2, 4]
```  

* toArrayPostOrder()  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(3, "abc");
  rbTree.insert(4, "abc");
  rbTree.insert(1, "foo");
  rbTree.insert(0, "bar");
  rbTree.insert(2, "bar");
  const array = rbTree.toArrayPostOrder();

  array is [Object, Object, Object, Object, Object]
  the key order is [0, 2, 1, 4, 3]
  return an array of objects that contains key and value
```  

* minNode()  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const node = rbTree.minNode();

  node is Object {key: 1, value: "foo"}
  return the smallest node value in the tree
```   

* maxNode()  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const node = rbTree.maxNode();

  node is Object {key: 3, value: "bar"}
  return the largest node value in the tree
```     


### The tree structure now support inserting string as keys .  
##### For example:  

letter 'a' will be treated as 1  
letter 'b' will be treated as 2  
letter 'b' will be treated as 3  
letter 'A' will be treated as 1 as well  
letter 'B' will be treated as 2 as well  
letter 'C' will be treated as 3 as well  
a string like "abc" will be treated as 123  
a string like "Abc" will be treated as 123  
a string like "dc" will be treated as 41   

```javascript
  rbTree.insert("id", 1001) => rbTree.insert(94, 1001);
  rbTree.insert("a", "foo") => rbTree.insert(1, "foo");  
  rbTree.insert("Am", "bar")=> rbTree.insert(113, "foo");  
  rbTree.insert("boy", "foo") => rbTree.insert(21525, "foo");  
```  

* future work   
Better print format   
Pass all linter  
and more ...

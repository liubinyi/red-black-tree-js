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
rbTree.print();


2 color: 1
___1 color: 1 (parent node 2)
___4 color: 0 (parent node 2)
______null color: 1 (parent node 1)
______null color: 1 (parent node 1)
______3 color: 1 (parent node 4)
______5 color: 1 (parent node 4)
____________null color: 1 (parent node 3)
____________null color: 1 (parent node 3)
____________null color: 1 (parent node 5)
____________null color: 1 (parent node 5)
```  


### The tree structure currently support insertion for string.  
##### There will be more supports added for inserting a key as string in the next release.  
For example:  
letter 'a' will be treated as 97  
letter 'b' will be treated as 98  
letter 'A' will be treated as 65  
a string like "apple" that start with 'a' will be treat as 97(for now)  
a string like "boy" that start with b will be treat as 97(for now)  
```javascript
  rbTree.insert("a", "foo");
  rbTree.insert("boy", "foo");
  rbTree.insert("Am", "bar");  
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

* findNode  
```javascript
  const rbTree = new RbTree();
  rbTree.insert(1, "foo");
  rbTree.insert(2, "bar");
  rbTree.insert(3, "bar");
  const node = rbTree.findNode(2);

  return the node object
```        

* insert  
```rbTree.insert(1, "abc")```
insert a key and a value to a node   

* remove  
```rbTree.remove(1)```  
remove a node by its key  

* print  
```rbTree.print()```  
print out the current tree in a good format  

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


more docs coming soon..

* future work  
tree support insertion for  letters and string
clean up the api  
improve code quality  
switch this to Persistent  red black tree?
and more ...

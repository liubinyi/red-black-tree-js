[![Build Status](https://travis-ci.org/liubinyi/red-black-tree-js.svg?branch=master)](https://travis-ci.org/liubinyi/red-black-tree-js)
[![Coverage Status](https://coveralls.io/repos/github/liubinyi/red-black-tree-js/badge.svg?branch=master)](https://coveralls.io/github/liubinyi/red-black-tree-js?branch=master)


# A javascript implementation of red-black-tree using ES6 syntax  

### Reference
* https://www.cs.usfca.edu/~galles/visualization/RedBlack.html visualization  
* http://ce.bonabu.ac.ir/uploads/30/CMS/user/file/115/EBook/Introduction.to.Algorithms.3rd.Edition.Sep.2010.pdf  book  

### OverView
* data structure

| Node | LeafNode |  
| ---- | -------- |  
| *left* | *left(null)* |  
| *right* | *right(null)* |  
| *parent* | *parent(null)* |  
| *key* | *key(null)* |  
| *value* | *value(null)* |  
| *color* | *value(black)* |  

### API  
* create RB TREE  
``` let rbTree = new RbTree() ```  
create a red black tree with root = null  

* clone  
``` rbTree.clone()```  

* find  
``` rbTree.find(2)```  
find value by key  

* findNode  
``` rbTree.findNode(node)```  
return the value of the node  

* insert  
```rbTree.insert(1, "abc")```
insert a key and a value to a node  

* remove  
```rbTree.remove(1)```  
remove node by key  

* print  
```rbTree.print()```  
print out the current tree in a good format  

* toSortedArray()  
```rbTree.toSortedArray()```  
return a sorted array of objects that contains key and value   


more docs coming soon..

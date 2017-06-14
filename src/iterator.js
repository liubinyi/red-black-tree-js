import { isNilNode } from './helper';

class iterator {
  constructor(root) {
    this.stack = [];
    this.curr = root;
  }

   hasNext() {
     return !isNilNode(this.curr) || this.stack.length > 0;
   }

   next() {
     while (!isNilNode(this.curr)) {
       this.stack.push(this.curr);
       this.curr = this.curr.left;
     }
     this.curr = this.stack.pop();
     const node = this.curr;
     this.curr = this.curr.right;
     return node.getValue();
   }
}

export default iterator;

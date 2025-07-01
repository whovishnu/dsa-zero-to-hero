class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= x) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.length) {
      const currentMini = this.stack.pop();
      if (currentMini === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  }

  top() {
    if (this.stack.length) return this.stack[this.stack.length - 1];
    return null;
  }

  getMin() {
    if (this.minStack.length) return this.minStack[this.minStack.length - 1];
    return null;
  }
}

module.exports = { MinStack };

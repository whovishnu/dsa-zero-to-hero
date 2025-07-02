class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x) {
    this.stackIn.push(x);
  }

  pop() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length) {
        let lastItem = this.stackIn.pop();
        this.stackOut.push(lastItem);
      }
    }

    return this.stackOut.pop() ?? null;
  }

  peek() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length) {
        let lastItem = this.stackIn.pop();
        this.stackOut.push(lastItem);
      }
    }
    return this.stackOut[this.stackOut.length - 1] ?? null;
  }

  empty() {
    return this.stackOut.length === 0 && this.stackIn.length === 0;
  }
}

module.exports = { MyQueue };

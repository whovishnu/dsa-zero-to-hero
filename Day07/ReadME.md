## 🧠 **Challenge: Implement Queue using Stacks**

### 🔍 Problem Statement:

Design a class `MyQueue` that simulates a **queue** (FIFO) using **only stacks** (LIFO).

You must implement the following methods:

| Method    | Description                                |
| --------- | ------------------------------------------ |
| `push(x)` | Push element `x` to the back of queue      |
| `pop()`   | Removes and returns element from the front |
| `peek()`  | Returns the element at the front           |
| `empty()` | Returns `true` if queue is empty           |

---

### 👇 Example:

```js
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop());  // 1
console.log(queue.empty()); // false
```

---

## 🧱 Starter Template (JavaScript):

```javascript
class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x) {
  }

  pop() {
  }

  peek() {
  }

  empty() {
  }
}
```

---

## 💡 Hint:

Use two stacks:

* `stackIn` for push operations.
* `stackOut` for pop/peek — fill this only when it’s empty.

That way you simulate the **FIFO behavior** using LIFO tools!

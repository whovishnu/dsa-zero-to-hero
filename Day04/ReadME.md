## 🧠 **Challenge: Design a Min Stack**

You're building a special **stack** that, in addition to the regular operations, can also **retrieve the minimum element** in **O(1) time** — no searching or sorting!

---

## 🛠️ Requirements:

Implement a class `MinStack` that supports:

| Method      | Description                                 |
|-------------|---------------------------------------------|
| `push(x)`   | Pushes `x` onto the stack                   |
| `pop()`     | Removes the top element                     |
| `top()`     | Returns the top element                     |
| `getMin()`  | Returns the **minimum** element in the stack (in O(1) time)

---

## 🧱 Starter Template (JavaScript)

```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    // TODO: Push to stack
    // Also push to minStack if it's empty or x <= currentMin
  }

  pop() {
    // TODO: Pop from stack
    // If popped element is equal to top of minStack, pop minStack too
  }

  top() {
    // TODO: Return last element from stack
  }

  getMin() {
    // TODO: Return last element from minStack
  }
}
```

---

## 🔍 Example Usage:

```js
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // ➜ -3
minStack.pop();
console.log(minStack.top());    // ➜ 0
console.log(minStack.getMin()); // ➜ -2
```

---

## 📦 Concepts Practiced:
- Stack
- Maintaining secondary structure for tracking
- Constant-time min tracking

---
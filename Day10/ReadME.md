## 🔥 **Monotonic Stack – Problem 2: Next Greater Element II (Circular Array)**

### 📘 Problem Statement:

You are given a **circular array** `nums`.
Return the **next greater element** for every element.
If it doesn’t exist, return `-1`.

---

### 🧠 What’s New?

It’s like the last problem, but the array is **circular**.

> This means after reaching the end, you continue checking from the beginning.

---

### 📝 Example:

```js
Input: [1, 2, 1]  
Output: [2, -1, 2]
```

**Why?**

* For index 0 → 1 → next greater is 2
* For index 1 → 2 → no greater ahead (or after wrap) → -1
* For index 2 → 1 → wrap around and see 2 → result is 2

---

## 💡 Approach (Monotonic Stack Trick):

1. Loop through the array **twice** (simulate circular)
2. Use a **monotonic decreasing stack** (store indices)
3. On each element:

   * Pop smaller elements and resolve their "next greater"
4. Use `i % n` to wrap around indices

---

## 🧱 JS Starter Template:

```js
function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const curr = nums[i % n];

    // TODO: resolve next greater using stack

    if (i < n) {
      stack.push(i); // only push index in first round
    }
  }

  return result;
}
```

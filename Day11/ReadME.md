## 💥 **Challenge: Largest Rectangle in Histogram**

### 📘 Problem Statement:

You are given an array of bar heights in a histogram.
Each bar has a width of `1`.

> Return the area of the **largest rectangle** you can build using **consecutive bars**.

---

### 📝 Example:

```js
Input: [2, 1, 5, 6, 2, 3]
Output: 10
```

### 🔍 Explanation:

* The largest rectangle is made of `5` and `6` → width = 2, height = 5
  → Area = 5 × 2 = **10**

---

## 🧠 Core Idea: Use a **Monotonic Increasing Stack**

### Why?

* We need to know **how far we can extend left and right** for each bar height.
* When a **shorter bar** is found, it means we’ve reached the **right boundary** for previous taller bars.

---

### 💡 Strategy:

1. Traverse the heights array.
2. Use a **monotonic increasing stack** to track indices.
3. When the current height is **less than the height at the top of the stack**, pop the stack:

   * Calculate the **width** = `i - stackTop - 1`
   * Use the popped height × width to update `maxArea`

📦 Add a `0` at the end of the array to **flush the stack**

---

## 🧱 JavaScript Starter Template:

```js
function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  heights.push(0); // Sentinel to empty stack at end

  for (let i = 0; i < heights.length; i++) {
    // TODO: While current height is less than stack top → resolve areas
  }

  return maxArea;
}
```

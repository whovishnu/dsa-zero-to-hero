## 🧩 Day 17 – Container With Most Water

### 📦 Category: Two Pointers (Opposite Ends)

---

### 🧠 Problem Statement:

> You are given an array `height[]` of non-negative integers.
> Each value represents the height of a vertical line on the x-axis.
> Find the **two lines** that, together with the x-axis, form a container that **holds the most water**.

---

### ✅ Example:

```js
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```

📏 Explanation:

* The most water is between height\[1] = 8 and height\[8] = 7
* Area = min(8, 7) × (8 - 1) = 7 × 7 = **49**

---

### 🔧 Function Signature:

```js
function maxArea(height) {
  // your code here
}
```

---

### 💡 Core Insight (Two Pointers):

Start with two pointers:

* `left = 0`, `right = height.length - 1`

At each step:

* Compute area: `min(height[left], height[right]) * (right - left)`
* Update `maxArea` if greater
* Move the **shorter line** inward (since width is shrinking, we want taller height)

---

### 🛠️ Real Analogy:

Think of **two fences** forming a water tank.
To maximize the water stored:

* You need **wide distance**
* And **tall height**
* But width shrinks as you move inward, so height needs to increase

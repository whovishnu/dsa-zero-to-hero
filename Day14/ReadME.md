## 🧩 **Day 14 – Minimum Size Subarray Sum**

### 📦 Category: Sliding Window (Dynamic-size)

---

### 🧠 Problem Statement:

> Given an array of positive integers `nums` and a positive integer `target`,
> return the **minimum length** of a **contiguous subarray** of which the sum is **greater than or equal to `target`**.
> If no such subarray exists, return `0`.

---

### ✅ Example:

```js
Input: nums = [2, 3, 1, 2, 4, 3], target = 7  
Output: 2  
Explanation: The subarray [4, 3] has sum ≥ 7 and length 2
```

```js
Input: nums = [1, 1, 1, 1, 1, 1], target = 11  
Output: 0  
Explanation: No subarray has sum ≥ 11
```

---

## 🔧 Your Task:

Write this function:

```js
function minSubArrayLen(target, nums) {
  // your code here
}
```

---

### 💡 Sliding Window Technique (Shrinkable):

* Use two pointers: `left` and `right`
* Expand `right` to increase sum
* Shrink `left` to try to minimize the window while sum ≥ target


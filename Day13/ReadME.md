## 🧩 Day 13 – Maximum Sum Subarray of Size K

### 📦 Category: **Sliding Window** (Fixed-size)

---

### 🧠 Problem Statement:

> Given an array of integers `nums` and an integer `k`,
> return the **maximum sum** of any **subarray of size `k`**.

---

### 💡 Real-World Analogy:

You're tracking calories eaten each day.
You want to find the **maximum calories eaten in any continuous `k`-day stretch**.

---

### ✅ Example:

```js
Input: nums = [2, 1, 5, 1, 3, 2], k = 3  
Output: 9  
Explanation: [5,1,3] has the maximum sum = 9
```

```js
Input: nums = [1, 2, 3, 4, 5], k = 2  
Output: 9  
Explanation: [4,5] gives the max sum.
```

---

## 🔧 Your Task:

Write this function in JS:

```js
function maxSumSubarray(nums, k) {
  // your code here
}
```

---

### 🔁 Sliding Window Logic (Fixed-size):

* Build the first window of size `k`
* Slide it forward by 1 each time
* Subtract the element leaving the window, add the new one entering
* Track the **max sum seen so far**


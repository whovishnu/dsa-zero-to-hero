## 🧩 Day 16 – Remove Duplicates from Sorted Array

### 📦 Category: Two Pointers (Slow & Fast Pointers)

---

### 🧠 Problem Statement:

> Given a sorted array `nums`, remove the **duplicates in-place** such that each element appears only once
> and return the **new length** of the modified array.
>
> The first part of the array should hold the unique elements in order.
> You must do it using **O(1) extra space**.

---

### ✅ Example:

```js
Input: nums = [1, 1, 2]
Output: 2  
Modified Array: [1, 2, _]
```

```js
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5  
Modified Array: [0, 1, 2, 3, 4, _ , _ , _ , _ , _]
```

---

### 🔧 Function Signature:

```js
function removeDuplicates(nums) {
  // modify nums in-place
  return newLength;
}
```

---

### 💡 Two Pointer Technique:

* One pointer `i` for tracking the **unique position**
* One pointer `j` to scan through the array

**When `nums[i] !== nums[j]`**, move `i` forward and update `nums[i]`

---

### 🛠️ Real-World Analogy:

Think of a list of sorted customer IDs — you're asked to keep only the **first time** each customer appears, and remove the rest **without creating a new list**.

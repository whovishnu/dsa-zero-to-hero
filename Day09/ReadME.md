## **Monotonic Stack Practice – Problem 1** 🔥

---

## 🧠 **Challenge: Next Greater Element I**

### 📘 Problem Statement:

You are given two arrays:

* `nums1` is a subset of `nums2`
* For each element in `nums1`, find the **next greater element** in `nums2`
* If there is none, return `-1`

---

### 🔍 Example:

```js
Input:
nums1 = [4, 1, 2]
nums2 = [1, 3, 4, 2]

Output:
[-1, 3, -1]
```

### Explanation:

* Next greater for **4** in nums2 is ❌ none → `-1`
* Next greater for **1** in nums2 is ✅ `3`
* Next greater for **2** is ❌ none → `-1`

---

## 💡 Monotonic Stack Approach:

1. Traverse `nums2` from left to right.
2. Use a **stack** to keep track of decreasing numbers.
3. Build a **map** of `element → nextGreater` as you resolve them.
4. Look up answers for `nums1` using that map.

---

## 🧱 JavaScript Starter Template:

```js
function nextGreaterElement(nums1, nums2) {
  const stack = [];
  const nextGreaterMap = new Map();

  for (let num of nums2) {
    // TODO: Build nextGreaterMap using stack
  }

  return nums1.map(num => nextGreaterMap.get(num) ?? -1);
}
```

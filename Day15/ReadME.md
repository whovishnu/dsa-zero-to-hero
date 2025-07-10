## 🧩 Day 15 – Longest Substring with At Most K Distinct Characters

### 📦 Category: Sliding Window (Dynamic Size)

---

### 🧠 Problem Statement:

> Given a string `s` and an integer `k`,
> return the **length of the longest substring** that contains **at most `k` distinct characters**.

---

### ✅ Examples:

```js
Input: s = "eceba", k = 2  
Output: 3  
Explanation: "ece" has 2 distinct chars.

Input: s = "aa", k = 1  
Output: 2  
Explanation: "aa" has only 1 distinct char.
```

---

### 🔧 Function Signature

```js
function lengthOfLongestKSubstring(s, k) {
  // your code here
}
```

---

## 🧠 Real-World Analogy:

Imagine a streaming service allows you to watch shows,
but you can **only watch `k` genres at a time**.

What's the longest streak of consecutive shows you can watch
**without switching to a 3rd genre**?

---

### 💡 Sliding Window Strategy:

* Use two pointers `left` and `right` to define the window.
* Use a **HashMap** to count character frequency.
* If map size > k → shrink the window from the left.
* Track the **maximum window length** seen so far.

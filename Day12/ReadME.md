## 🧩 Day 12 – **Longest Substring Without Repeating Characters**

### 🧠 Real-World Analogy:

You're typing a password and want to know the **longest stretch of letters you've typed without repeating any characters**.

---

### 💬 Problem Statement:

> Given a string `s`, find the length of the **longest substring** without repeating characters.

---

### 🔍 Example:

```js
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with length 3.
```

```js
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with length 1.
```

```js
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with length 3.
```

---

### ✅ Constraints:

* Input length ≤ 10⁵
* You can assume only lowercase/uppercase letters and symbols

---

## 🔧 Your Goal:

Write a function in **JavaScript**:

```js
function lengthOfLongestSubstring(s) {
  // your code here
}
```

---

### ✅ Input:

```js
"abcabcbb"
```

### ✅ Output:

```js
3
```

---

### 💡 Hint (Don't open unless stuck!):

Use a **sliding window** and a `Set` to track unique characters.
Move the window start forward when you find a duplicate.


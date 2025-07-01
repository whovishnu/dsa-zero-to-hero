## 🧠 **Challenge: Backspace String Compare**

### 🔍 Problem Statement:

You’re given two strings `s` and `t`.
Each string may contain letters and the `#` character, where:

* `#` means a **backspace** — it deletes the previous character if there is one.

Your task is to **return `true` if both strings are equal after processing backspaces**, otherwise return `false`.

---

### 📝 Examples:

```js
Input: s = "ab#c", t = "ad#c"
Output: true
// Explanation: "ab#c" → "ac", "ad#c" → "ac"
```

```js
Input: s = "a##c", t = "#a#c"
Output: true
// Both reduce to "c"
```

```js
Input: s = "a#c", t = "b"
Output: false
```

---

## 💡 Hint:

This is a classic **stack simulation**:

* Push characters onto a stack
* When `#` appears, pop the last character (if any)
* Then compare final results

---

## 🧱 Starter Template:

```javascript
function backspaceCompare(s, t) {
}
```

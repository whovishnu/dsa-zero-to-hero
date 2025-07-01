
## 🧠 **Day 05 Challenge: Remove All Adjacent Duplicates in String**

### 🔍 Problem Statement:

You are given a string `s`.  
**Repeatedly remove** adjacent duplicate letters **until no more can be removed**.

Return the final result string.

---

### 📝 Examples:

```js
Input: "abbaca"
Output: "ca"
Explanation:
- "abbaca" → remove "bb" → "aaca"
- "aaca" → remove "aa" → "ca"
```

```js
Input: "azxxzy"
Output: "ay"
```

---

### 🧱 Starter Template (JavaScript):

```javascript
function removeDuplicates(s) {
  const stack = [];

  for (let char of s) {
    // TODO: If stack is not empty and top is same as current char, pop it
    // Else, push the char to the stack
  }

  // Return the joined stack
  return "";
}
```

---

### 💡 Hint:
This is a perfect use-case for a **stack**, where:
- You track the last seen character.
- If the next character is the same, remove both.
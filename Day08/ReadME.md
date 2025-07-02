## 🧠 **Challenge: Daily Temperatures**

### 🔍 Problem Statement:

You are given an array of temperatures where `temperatures[i]` is the temperature on day `i`.
Your task is to return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a **warmer temperature**.

If there is **no future day** for a warmer temperature, put `0`.

---

### 📝 Example:

```js
Input:  [73, 74, 75, 71, 69, 72, 76, 73]
Output: [1, 1, 4, 2, 1, 1, 0, 0]
```

👉 Explanation:

* Day 0 → 73 → wait 1 day for 74
* Day 1 → 74 → wait 1 day for 75
* Day 2 → 75 → wait 4 days for 76
* ...
* Day 6 → 76 → no warmer day → 0

---

## 🧱 Starter Template (JavaScript):

```javascript
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    // TODO: Maintain stack of decreasing temperatures
  }

  return answer;
}
```

---

## 💡 Core Idea: Monotonic Stack

* Use a **stack to store indices** of temperatures.
* Keep stack **monotonically decreasing** (from hottest to coldest).
* When a warmer temp appears → resolve previous colder ones.

---

### 🧠 Real World Analogy:

Imagine you're looking at each day's temperature and asking:

> “When will it be warmer than today?”

You **stack previous days**, and when a hotter day comes, you say:

> "Ah! This is warmer than those. Let’s mark how many days they had to wait."


## 🧠 **Challenge: Design a Ticket Counter System (Queue Simulation)**

### 🎯 Real-World Scenario:

You’re building a ticketing system (like for a movie or train). People stand in a line (FIFO order).
But here’s the twist — there’s a **VIP counter** that can fast-track specific users.

---

## 🛠️ Your Task:

Design a system with two queues:

1. **Normal Queue** — for general people.
2. **VIP Queue** — VIPs are served first, even if they arrive later.

### Required Operations:

* `enqueue(name, isVIP)` – Add a person to the appropriate queue.
* `serve()` – Serve the next person (VIPs first).
* `peek()` – Show who’s next without serving.
* `queueStatus()` – Return all people in order of service.

---

### 🔍 Example:

```js
enqueue("Alice", false)   // Normal
enqueue("Bob", true)      // VIP
enqueue("Charlie", false)

peek() → "Bob"
serve() → "Bob"
serve() → "Alice"
```

---

## 💡 DSA Concepts:

* Queue implementation (FIFO)
* Priority handling
* Condition-based queue management
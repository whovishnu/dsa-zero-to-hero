### 📦 **DSA Challenge #1 – Stack-Based Undo Feature**

**🧠 Real-World Scenario:**
You're building a simple text editor (like Notepad). Every time the user types or deletes something, you store it. When the user presses **Undo**, the editor should go back one step.

---

### 🧰 Your Task:

1. Use **two stacks**:

   * `actions`: Stores user actions (e.g. type "a", type "b", delete).
   * `undo`: Stores the actions that were undone.

2. Support these operations:

   * `type(character)`
   * `delete()` → removes the last character
   * `undo()` → reverses the last action
   * `redo()` → re-applies the last undone action

3. Maintain the current text as a string.

---

### 📝 Example:

```plaintext
type("h") → text = "h"
type("i") → text = "hi"
delete() → text = "h"
undo() → text = "hi"
redo() → text = "h"
```

---

### 💡 Concepts You’ll Use:

* Stack push/pop
* Handling string states
* Thinking like a system engineer (how Undo/Redo really works)

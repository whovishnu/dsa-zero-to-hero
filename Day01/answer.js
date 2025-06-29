class TextEditor {
  constructor() {
    this.text = "";
    this.actions = []; // stack to store actions
    this.undoStack = []; // stack to store undone actions
  }

  type(char) {
    this.text += char;
    this.actions.push({ type: "type", char: char });
    this.undoStack = []; 
  }

  delete() {
    const lastChar = this.text.slice(-1);
    this.text = this.text.slice(0, -1);
    this.actions.push({ type: "delete", char: lastChar });
  }

  undo() {
    const lastAction = this.actions.pop();
    if (!lastAction) return; // nothing to undo
    this.undoStack.push(lastAction);

    if (lastAction.type === "type") {
      this.text = this.text.slice(0, -1);
    }

    if (lastAction.type === "delete") {
      this.text += lastAction.char;
    }
  }

  redo() {
    const lastUndoneAction = this.undoStack.pop();

    if (lastUndoneAction) {
      this.actions.push(lastUndoneAction);

      if (lastUndoneAction.type === "type") {
        this.text += lastUndoneAction.char;
      }

      if (lastUndoneAction.type === "delete") {
        this.text = this.text.slice(0, -1);
      }
    }
  }

  getText() {
    return this.text;
  }
}

module.exports = TextEditor;
class TextEditor {
  constructor() {
    this.text = "";
    this.actions = [];    // stack to store actions
    this.undoStack = [];  // stack to store undone actions
  }

  type(char) {
    // TODO: Add char to text
    // TODO: Push action to actions stack
    // TODO: Clear undoStack
  }

  delete() {
    // TODO: Remove last char from text
    // TODO: Push delete action to actions stack
    // TODO: Clear undoStack
  }

  undo() {
    // TODO: Pop from actions
    // TODO: Reverse the action on text
    // TODO: Push to undoStack
  }

  redo() {
    // TODO: Pop from undoStack
    // TODO: Reapply to text
    // TODO: Push back to actions
  }

  getText() {
    return this.text;
  }
}

module.exports = TextEditor;

// Example Usage:
// const editor = new TextEditor();
// editor.type('a');
// console.log(editor.getText());

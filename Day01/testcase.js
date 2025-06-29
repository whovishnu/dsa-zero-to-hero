// testTextEditor.js
const TextEditor = require("./answer.js");

const testCases = [
  {
    name: "Basic Typing",
    run: () => {
      const editor = new TextEditor();
      editor.type("a");
      editor.type("b");
      return editor.getText() === "ab";
    },
  },
  {
    name: "Delete and Undo",
    run: () => {
      const editor = new TextEditor();
      editor.type("x");
      editor.type("y");
      editor.delete();
      if (editor.getText() !== "x") return false;
      editor.undo();
      return editor.getText() === "xy";
    },
  },
  {
    name: "Undo Typing",
    run: () => {
      const editor = new TextEditor();
      editor.type("z");
      editor.type("o");
      editor.undo();
      return editor.getText() === "z";
    },
  },
  {
    name: "Redo After Undo",
    run: () => {
      const editor = new TextEditor();
      editor.type("c");
      editor.type("d");
      editor.undo();
      editor.undo();
      editor.redo();
      editor.redo();
      return editor.getText() === "cd";
    },
  },
  {
    name: "Redo Wiped After New Action",
    run: () => {
      const editor = new TextEditor();
      editor.type("h");
      editor.type("i");
      editor.undo();
      editor.type("!");
      editor.redo(); // should do nothing
      return editor.getText() === "h!";
    },
  },
  {
    name: "No Crash on Empty Undo/Redo",
    run: () => {
      const editor = new TextEditor();
      editor.undo();
      editor.redo();
      return editor.getText() === "";
    },
  },
];

let passed = 0;

console.log("Running TextEditor Test Cases...\n");

testCases.forEach((test, index) => {
  try {
    const result = test.run();
    if (result) {
      console.log(`✅ Test ${index + 1}: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ Test ${index + 1}: ${test.name}`);
    }
  } catch (error) {
    console.log(`❌ Test ${index + 1}: ${test.name}`);
    // console.error(`❌ Error in Test ${index + 1}: ${test.name}`);
    // console.error(error.message);
    return;
  }
});

console.log(`\n${passed}/${testCases.length} Test Cases Passed`);
